import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/firebaseClient';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';


type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt?: Timestamp;
  status?: string;
};



const AdminDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Message[];
        setMessages(docs);
      } catch (err) {
        console.error('Error fetching messages:', err);
      } finally {
        setLoadingMessages(false);
      }
    };

    if (user) fetchMessages();
  }, [user]);

  if (loading || loadingMessages) {
    return <div className="text-center mt-32 text-white">Loading dashboard...</div>;
  }

  const updateStatus = async (id: string, newStatus: string) => {
  try {
    await updateDoc(doc(db, 'messages', id), {
      status: newStatus,
    });
    toast.success(`Status updated to "${newStatus}"`);
    setMessages((prev: Message[]) =>
      prev.map((msg: Message) =>
        msg.id === id ? { ...msg, status: newStatus } : msg
      )
    );
  } catch (err) {
    console.error('Error updating status:', err);
    toast.error('Failed to update status.');
  }
};

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 p-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Admin Dashboard</h1>
      {messages.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No messages yet.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li key={msg.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  <strong>{msg.name}</strong> ({msg.email}) – <em>{msg.status ?? 'new'}</em>
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => updateStatus(msg.id, 'considering')}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Considering
                  </button>
                  <button
                    onClick={() => updateStatus(msg.id, 'inprogress')}
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                  >
                    In Progress
                  </button>
                  <button
                    onClick={() => updateStatus(msg.id, 'completed')}
                    className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Completed
                  </button>
                </div>
              </div>
              <p className="mt-2 text-slate-800 dark:text-white">{msg.message}</p>
              <p className="mt-1 text-xs text-gray-400">
                {msg.createdAt?.toDate?.().toLocaleString() ?? 'No timestamp'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
