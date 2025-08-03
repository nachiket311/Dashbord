import React from 'react';

const STable = () => {
  const data = [
    { name: 'Frozen yoghurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
    { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3 },
    { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 3.9 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="h-14 border-b">
            <th className="px-4 text-left">Dessert (100g serving)</th>
            <th className="px-4 text-right">Calories</th>
            <th className="px-4 text-right">Fat (g)</th>
            <th className="px-4 text-right">Carbs (g)</th>
            <th className="px-4 text-right">Protein (g)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="h-14 border-b">
              <td className="px-4 text-left">{item.name}</td>
              <td className="px-4 text-right">{item.calories}</td>
              <td className="px-4 text-right">{item.fat}</td>
              <td className="px-4 text-right">{item.carbs}</td>
              <td className="px-4 text-right">{item.protein}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default STable;
