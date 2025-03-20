import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ItemForm from './ItemForm';
import AdmNav from './AdmNav';
import Footer from './Footer';

interface Item {
  _id?: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState('');
  const [itemToEdit, setItemToEdit] = useState<Item | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch('http://127.0.0.1:5002/api/items');
    const data = await response.json();
    setItems(data);
  };

  const handleDelete = async (id: string) => {
    await fetch(`http://127.0.0.1:5002/api/items/${id}`, { method: 'DELETE' });
    fetchItems();
  };

  const handleSave = async (item: Item) => {
    const method = item._id ? 'PUT' : 'POST';
    const url = item._id ? `http://127.0.0.1:5002/api/items/${item._id}` : 'http://127.0.0.1:5002/api/items';
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    fetchItems();
    setItemToEdit(null);
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4 p-4">
      <AdmNav />
      <ItemForm onSave={handleSave} itemToEdit={itemToEdit} />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="input mb-4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary w-full"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => (
              <tr key={item._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{item.title}</td>
                <td className="py-2 px-4 border-b">{item.price}</td>
                <td className="py-2 px-4 border-b">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                </td>
                <td className="py-2 px-4 border-b">{item.category}</td>
                <td className="py-2 px-4 border-b space-x-2 flex items-center">
                  <button
                    onClick={() => setItemToEdit(item)}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <FaEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id!)}
                    className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <FaTrash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ItemList;
