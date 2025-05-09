import { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';

export interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    userId: string;
    email: string;
    role: string;
  };
}

export function withAuth(handler: any) {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    try {
      const token = req.cookies['auth-token'];

      if (!token) {
        return res.status(401).json({ error: 'Authentication required' });
      }

      const decoded = verify(token, process.env.JWT_SECRET || 'your-secret-key') as {
        userId: string;
        email: string;
        role: string;
      };

      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
  };
}

export function withRole(roles: string[]) {
  return (handler: any) => {
    return withAuth(async (req: AuthenticatedRequest, res: NextApiResponse) => {
      if (!req.user) {
        return res.status(401).json({ error: 'Authentication required' });
      }

      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: 'Insufficient permissions' });
      }

      return handler(req, res);
    });
  };
} 