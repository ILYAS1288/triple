"use client";
import Image from "next/image";
import { useState } from "react";
import {
  CalendarDaysIcon,
  TrophyIcon,
  UsersIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  category: "education" | "sports" | "community";
}


const isAdmin = true; 

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<Omit<Event, "id">>({
    title: "",
    date: "",
    description: "",
    category: "education",
  });

  const addEvent = () => {
    if (!isAdmin) {
      alert("Only admins can add events.");
      return;
    }
    setEvents([...events, { ...newEvent, id: Date.now() }]);
    setIsModalOpen(false);
    setNewEvent({ title: "", date: "", description: "", category: "education" });
  };

  const removeEvent = (id: number) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const categories = [
    { type: "education", label: "Education Events", icon: CalendarDaysIcon },
    { type: "sports", label: "Sports Events", icon: TrophyIcon },
    { type: "community", label: "Community Events", icon: UsersIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 bg-gray-900">
        <Image
          src="/images/2.jpg"
          alt="Education Services"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
          <div className="max-w-4xl px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Triple Organization Events
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Comprehensive learning solutions for individuals and organizations
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map(({ type, label, icon: Icon }) => (
            <div
              key={type}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Icon className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mb-4" />
              <h2 className="text-lg md:text-xl font-semibold mb-3">{label}</h2>

              {/* Only show Add Event button for admins */}
              {isAdmin && (
                <button
                  onClick={() => {
                    setNewEvent((prev) => ({ ...prev, category: type as any }));
                    setIsModalOpen(true);
                  }}
                  className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  <PlusCircleIcon className="h-5 w-5" /> Add Event
                </button>
              )}

              {/* Event List */}
              <div className="mt-4 space-y-4">
                {events
                  .filter((event) => event.category === type)
                  .map((event) => (
                    <div
                      key={event.id}
                      className="bg-gray-100 p-4 rounded shadow-md flex justify-between items-center"
                    >
                      <div>
                        <h3 className="font-bold text-base md:text-lg">{event.title}</h3>
                        <p className="text-sm text-gray-600">{event.date}</p>
                        <p className="text-sm text-gray-700 mt-1">{event.description}</p>
                      </div>
                      {/* Only admins can remove events */}
                      {isAdmin && (
                        <button
                          onClick={() => removeEvent(event.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm md:max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Event</h2>
            <input
              type="text"
              placeholder="Event Title"
              className="w-full mb-2 p-2 border rounded"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <input
              type="date"
              className="w-full mb-2 p-2 border rounded"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="w-full mb-4 p-2 border rounded"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={addEvent}
                className={`px-4 py-2 ${isAdmin ? "bg-blue-600" : "bg-gray-400"} text-white rounded`}
                disabled={!isAdmin}
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
