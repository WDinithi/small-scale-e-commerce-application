import React, { useState, useEffect } from 'react';

interface ItemFormProps {
  onSave: (item: Item) => void;
  itemToEdit?: Item | null;
}

interface Item {
  _id?: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

const ItemForm: React.FC<ItemFormProps> = ({ onSave, itemToEdit }) => {
  const [item, setItem] = useState<Item>({ title: '', price: 0, image: '', category: '' });

  useEffect(() => {
    if (itemToEdit) {
      setItem(itemToEdit);
    }
  }, [itemToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem(prevItem => ({ ...prevItem, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(item);
    setItem({ title: '', price: 0, image: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="title" value={item.title} onChange={handleChange} placeholder="Title" className="input" required />
      <input type="number" name="price" value={item.price} onChange={handleChange} placeholder="Price" className="input" required />
      <input type="text" name="image" value={item.image} onChange={handleChange} placeholder="Image URL" className="input" required />
      <input type="text" name="category" value={item.category} onChange={handleChange} placeholder="Category" className="input" required />
      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
>Save</button>
    </form>
  );
};

export default ItemForm;
