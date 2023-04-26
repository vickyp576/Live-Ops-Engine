import React, { useState } from 'react'

const Home = () => {
  const [offerData, setOfferData] = useState({
    offer_id: '',
    offer_title: '',
    offer_description: "",
    offer_image: "",
    offer_sort_order: '',
    content: [
      { item_id: '', quantity: ''},
      { item_id: '', quantity: ''},
      ],
    scedule:{
      days_of_week : [],
      dates_of_month: [],
      months_of_year: [],
    },
    target: '',
    pricing: [
      {currency: '', cost: ""},
      {currency: '', cost: ""},
      
    ],

  });

  const handleSubmmit =(event)=>{
    event.preventDefault();

  };
  return (
    <div className='row'>
    <form onSubmit={handleSubmmit} className="col s12 m6 offset-m3">
    <div className="input-field">
      <input 
        id="offer_id" 
        type="text" 
        className="validate" 
        value={offerData.offer_id} 
        onChange={(event) => setOfferData({...offerData, offer_id: event.target.value})}
        placeholder="Offer ID"
      />
      <label htmlFor="offer_id"></label>
    </div>
    <div className="input-field">
      <input 
        id="offer_title" 
        type="text" 
        className="validate" 
        value={offerData.offer_title} 
        onChange={(event) => setOfferData({...offerData, offer_title: event.target.value})}
        placeholder="Offer Title"
      />
      <label htmlFor="offer_title"></label>
    </div>
    <div className="input-field">
      <input 
        id="offer_description" 
        type="text" 
        className="validate" 
        value={offerData.offer_description} 
        onChange={(event) => setOfferData({...offerData, offer_description: event.target.value})}
        placeholder='Offer Description'
      />
      <label htmlFor="offer_description"></label>
    </div>
    <div className="input-field">
      <input 
        id="offer_image" 
        type="text" 
        className="validate" 
        value={offerData.offer_image} 
        onChange={(event) => setOfferData({...offerData, offer_image: event.target.value})}
        placeholder='Offer Image'
      />
      <label htmlFor="offer_image"></label>
    </div>
    <div className="input-field">
      <input 
        id="offer_sort_order" 
        type="number" 
        className="validate" 
        value={offerData.offer_sort_order} 
        onChange={(event) => setOfferData({...offerData, offer_sort_order: event.target.value})}
        placeholder="Offer Sort Order"
      />
      <label htmlFor="offer_sort_order"></label>
    </div>
    <div className="input-field">
      <input 
        id="item1_id" 
        type="text" 
        className="validate" 
        value={offerData.content[0].item_id} 
        onChange={(event) => setOfferData({...offerData, content: [{...offerData.content[0], item_id: event.target.value}, offerData.content[1]]})}
        placeholder="Item 1 ID"
      />
      <label htmlFor="item1_id"></label>
    </div>
    <div className="input-field">
      <input 
        id="item1_quantity" 
        type="number" 
        className="validate" 
        value={offerData.content[0].quantity} 
        onChange={(event) => setOfferData({...offerData, content: [{...offerData.content[0], quantity: event.target.value}, offerData.content[1]]})}
        placeholder='Item 1 Quantity'
      />
      <label htmlFor="item1_quantity"></label>
    </div>

    <div className="input-field">
      <input 
        id="days_of_week" 
        type="text" 
        className="validate" 
        value={offerData.scedule.days_of_week.join(',')} 
        onChange={(event) => setOfferData({...offerData, scedule: {...offerData.scedule, days_of_week: event.target.value.split(',').map(Number)}})}
        placeholder='Days of Week'
      />
      <label htmlFor="days_of_week"></label>
    </div>


    <div className="input-field">
      <input 
        id="dates_of_month" 
        type="text" 
        className="validate" 
        value={offerData.scedule.dates_of_month.join(',')} 
        onChange={(event) => setOfferData({...offerData, scedule: {...offerData.scedule, dates_of_month: event.target.value.split(',').map(Number)}})}
        placeholder='Dates of month'
      />
      <label htmlFor="dates_of_month"></label>
    </div>

    <div className="input-field">
      <input 
        id="months_of_year" 
        type="text" 
        className="validate" 
        value={offerData.scedule.months_of_year.join(',')} 
        onChange={(event) => setOfferData({...offerData, scedule: {...offerData.scedule, months_of_year: event.target.value.split(',').map(Number)}})}
        placeholder='Months of Year'
      />
      <label htmlFor="months_of_year"></label>
    </div>


    <div className="input-field">
      <input 
        id="target" 
        type="text" 
        className="validate" 
        value={offerData.target} 
        onChange={(event) => setOfferData({...offerData, target: event.target.value})}
        placeholder="target"
      />
      <label htmlFor="target"></label>
    </div>

    <div className="input-field">
      <input 
        id="curreny_1" 
        type="text" 
        className="validate" 
        value={offerData.pricing[0].currency}
        onChange={(event)=>
          setOfferData({
            ...offerData,
            pricing:[
              {...offerData.pricing[0],
              currency: event.target.value},
              offerData.pricing[1],
              ],
            })
        }
        placeholder="currency 1"
      />
      <label htmlFor="currency_1"></label>
    </div>


    <div className="input-field">
      <input 
        id="cost_1" 
        type="number" 
        className="validate" 
        value={offerData.pricing[0].cost}
        onChange={(event) =>
        setOfferData({
          ...offerData,
          pricing: [
            {...offerData.pricing[0], cost: event.target.value},
            offerData.pricing[1],
          ],
        })
      }
        placeholder="cost 1"
      />
      <label htmlFor="cost_1"></label>
    </div>


    <div className="input-field">
      <input 
        id="curreny_2" 
        type="text" 
        className="validate" 
        value={offerData.pricing[1].currency}
      onChange={(event) =>
        setOfferData({
          ...offerData,
          pricing: [
            offerData.pricing[0],
            { ...offerData.pricing[1], currency: event.target.value },
          ],
        })
      }
        placeholder="currency 2"
      />
      <label htmlFor="currency_2"></label>
    </div>



    <div className="input-field">
      <input 
        id="cost_2" 
        type="number" 
        className="validate" 
        value={offerData.pricing[1].cost}
      onChange={(event) =>
        setOfferData({
          ...offerData,
          pricing: [
            offerData.pricing[0],
            { ...offerData.pricing[1], cost: event.target.value },
          ],
        })
      }
        placeholder="cost 2"
      />
      <label htmlFor="cost_2"></label>
    </div>

  
    <button className="waves-effect waves-light btn">Submit</button>
      
      
    </form>
    </div>

  )
}

export default Home