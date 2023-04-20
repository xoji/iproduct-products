import React, {useState, MouseEvent} from 'react';
import './App.css';

interface Price {
  months: number | '';
  per_month: number | '';
  general_price: number | '';
}

interface Color {
  name: string;
  hex: string;
}

interface Characteristic {
  key: string;
  value: string;
}

function App() {
  const [name, setName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [category_id, setCategoryId] = useState<number>();
  const [price, setPrice] = useState<number | ''>('');
  const [images, setImages] = useState<FileList | null>();
  const [prices, setPrices] = useState<Price[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [characters, setCharacters] = useState<Characteristic[]>([]);

  function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }
  return (
    <div className="form">
      <input type="file" className="input" multiple onChange={(e) => setImages(e.target.files)}/>
      <select className="input" defaultValue="none" value={category_id} onChange={(e) => setCategoryId(isNaN(parseInt(e.target.value)) ? NaN : parseInt(e.target.value))}>
        <option value="none" hidden disabled>Выберите категорию</option>
        <option value="1">Iphone</option>
      </select>
      <input type="text" className="input" placeholder="Название товара" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" className="input" placeholder="Описание товара" value={desc} onChange={(e) => setDesc(e.target.value)}/>
      <input type="number" className="input" placeholder="Цена товара" value={price.toString()} onChange={(e) => setPrice(isNaN(parseInt(e.target.value)) ? '' : parseInt(e.target.value))}/>
      <div className="prices-container">
        {prices.map((price, index) => {
          return (
            <div className="price-container" key={index}>
              <input type="number" value={price.months} placeholder="Длительность(В мес.)" className="input price-input" onChange={(e) => {
                const newArray = [...prices];
                setPrices(newArray.map((p, i) => {
                  if (i === index) {
                    return {...p, months: isNaN(parseInt(e.target.value)) ? '' : parseInt(e.target.value)}
                  } else {
                    return p
                  }
                }));
              }
              }/>
              <input type="number" value={price.per_month} placeholder="Сумма за мес." className="input price-input" onChange={(e) => {
                const newArray = [...prices];
                setPrices(newArray.map((p, i) => {
                  if (i === index) {
                    return {...p, per_month: isNaN(parseInt(e.target.value)) ? '' : parseInt(e.target.value)}
                  } else {
                    return p
                  }
                }));
              }
              }/>
              <input type="number" value={price.general_price} placeholder="Общ. сумма" className="input price-input" onChange={(e) => {
                const newArray = [...prices];
                setPrices(newArray.map((p, i) => {
                  if (i === index) {
                    return {...p, general_price: isNaN(parseInt(e.target.value)) ? '' : parseInt(e.target.value)}
                  } else {
                    return p
                  }
                }));
              }
              }/>
            </div>
          )
        })}
        <button className="btn" onClick={(e) => {
          e.preventDefault();
          setPrices([...prices, {months: '', general_price: '', per_month: ''}]);
        }}>Добавить цену</button>
      </div>
      <div className="prices-container">
        {colors.map((color, index) => {
          return (
            <div className="price-container" key={index}>
              <input type="text" value={color.name} placeholder="Имя цвета" className="input price-input" onChange={(e) => {
                const newArray = [...colors];
                setColors(newArray.map((p, i) => {
                  if (i === index) {
                    return {...p, name: e.target.value}
                  } else {
                    return p
                  }
                }));
              }
              }/>
              <input type="color" placeholder="цвет" style={{backgroundColor: color.hex}} value={color.hex} className="input price-input color-input" onChange={(e) => {
                const newArray = [...colors];
                setColors(newArray.map((p, i) => {
                  if (i === index) {
                    return {...p, hex: e.target.value}
                  } else {
                    return p
                  }
                }));
              }
              }/>
            </div>
          )
        })}
        <button className="btn" onClick={(e) => {
          e.preventDefault();
          setColors([...colors, {name: '', hex: '#000000'}]);
        }}>Добавить цвет</button>
      </div>
      <div className="prices-container">
        {characters.map((ch, index) => {
          return (
            <div className="price-container" key={index}>
              <input type="text" value={ch.key} placeholder="Имя" className="input price-input" onChange={(e) => {
                const newArray = [...characters];
                setCharacters(newArray.map((p, i) => {
                  if (i === index) {
                    return {...p, key: e.target.value}
                  } else {
                    return p
                  }
                }));
              }
              }/>
              <input type="text" placeholder="Значение" value={ch.value} className="input price-input color-input" onChange={(e) => {
                const newArray = [...characters];
                setCharacters(newArray.map((p, i) => {
                  if (i === index) {
                    return {...p, value: e.target.value}
                  } else {
                    return p
                  }
                }));
              }
              }/>
            </div>
          )
        })}
        <button className="btn" onClick={(e) => {
          e.preventDefault();
          setCharacters([...characters, {key: '', value: ''}]);
        }}>Добавить характеристику</button>
      </div>
      <button className="btn" onClick={submit}>Добавить товар</button>
    </div>
  );
}

export default App;
