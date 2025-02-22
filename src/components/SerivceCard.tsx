export default function ServiceCard({ title, description }: { 
    title: string;
    description: string;
  }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }