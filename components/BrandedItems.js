import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Import CartContext
import './BrandItems.css';

const BrandItems = () => {
  const { brand } = useParams();
  const { addToCart } = useContext(CartContext); // Get addToCart from CartContext

  const brandItems = {
    // brand items here (same as your existing code)
    'lego': [
      { id: 1, name: 'LEGO Classic Creative Brick Set', price: 40, imageUrl: 'https://m.media-amazon.com/images/I/81sXyDjMOPL.jpg' },
      { id: 2, name: 'LEGO City Fire Station', price: 60, imageUrl: 'https://m.media-amazon.com/images/I/91FmZYSGOOL._AC_UF1000,1000_QL80_.jpg' },
      { id: 3, name: 'LEGO Technic Off-Road Buggy', price: 70, imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/81XIWPLnEtL._AC_UL210_SR210,210_.jpg' },
      { id: 4, name: 'LEGO Star Wars Millennium Falcon', price: 150, imageUrl: 'https://mayatoys.in/wp-content/uploads/2024/05/L75375-1.webp' },
      { id: 5, name: 'LEGO Friends Heartlake City Playground', price: 80, imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/ja1dt3k0/block-construction/n/y/3/friends-heartlake-city-playground-lego-original-imaezzwfzz6t9wnb.jpeg?q=90&crop=false' },
      { id: 6, name: 'LEGO Ninjago Ninja Dojo Temple', price: 90, imageUrl: 'https://m.media-amazon.com/images/I/91-Sw0AHoRL.jpg' },
      { id: 7, name: 'LEGO Harry Potter Hogwarts Castle', price: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHlbZXhg4aMRAbzlgBVnEKQleme3VSOY4hw&s' },
      { id: 8, name: 'LEGO Marvel Avengers Quinjet', price: 90, imageUrl: 'https://m.media-amazon.com/images/I/91Vo9JspPDL._AC_UF1000,1000_QL80_.jpg' },
      { id: 9, name: 'LEGO DUPLO My First Train Set', price: 50, imageUrl: 'https://m.media-amazon.com/images/I/81FcPuDUzHL._AC_UF1000,1000_QL80_.jpg' },
      { id: 10, name: 'LEGO Architecture Statue of Liberty', price: 120, imageUrl: 'https://m.media-amazon.com/images/I/61w4GO6C7XL.jpg' }
    ],
    'mattel': [
      { id: 11, name: 'Barbie Dreamhouse', price: 200, imageUrl: 'https://images-cdn.ubuy.co.in/6341c8ad62760f53f27448a6-barbie-dream-house.jpg' },
      { id: 12, name: 'Hot Wheels Ultimate Garage', price: 150, imageUrl: 'https://m.media-amazon.com/images/I/81j3hfLNcJL.jpg' },
      { id: 13, name: 'Mattel UNO Card Game', price: 10, imageUrl: 'https://m.media-amazon.com/images/I/71y7+ObyWGL.jpg' },
      { id: 14, name: 'Polly Pocket Compact Playset', price: 25, imageUrl: 'https://m.media-amazon.com/images/I/81qEpE+dcGL.jpg' },
      { id: 15, name: 'Hot Wheels Monster Trucks', price: 30, imageUrl: 'https://images-cdn.ubuy.co.in/66439252aae369696b55ad7f-hot-wheels-monster-trucks-1-64-scale.jpg' },
      { id: 16, name: 'Barbie Fashionista Doll', price: 20, imageUrl: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491567599/665/491567599-1.webp' },
      { id: 17, name: 'Thomas & Friends TrackMaster Motorized Train', price: 50, imageUrl: 'https://m.media-amazon.com/images/I/71Efs6GWykS.jpg' },
      { id: 18, name: 'Barbie Dreamtopia Princess Doll', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPyd1FmTAoR854S-Vdb_S6hMiRolOzHpUlg&s' },
      { id: 19, name: 'Hot Wheels City Ultimate Gator Car Wash', price: 60, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQtxSKD0Bww8u8u-NPNZQG38rZJLK16lzFA&s' },
      { id: 20, name: 'Polly Pocket Hidden Hideouts Playset', price: 30, imageUrl: 'https://m.media-amazon.com/images/I/71gzUYigg3L.jpg' }
    ],
    'hasbro': [
      { id: 21, name: 'Nerf Elite Blaster', price: 40, imageUrl: 'https://babyamore.in/wp-content/uploads/2024/06/61mFswJ-s7L._SL1000_.jpg' },
      { id: 22, name: 'Play-Doh Fun Factory', price: 20, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8De15HrAqI2p2_zkqZ0Mma4gWY2GP76R1Q&s' },
      { id: 33, name: 'Monopoly Classic Board Game', price: 30, imageUrl: 'https://m.media-amazon.com/images/I/61QlfQSoEJL.jpg' },
      { id: 34, name: 'Transformers Action Figures', price: 35, imageUrl: 'https://images-cdn.ubuy.co.in/633ab2b679a966471047b964-transformers-toys-studio-series-61.jpg' },
      { id: 35, name: 'My Little Pony Friendship Castle', price: 55, imageUrl: 'https://m.media-amazon.com/images/I/91+41fEUmyL._AC_UF1000,1000_QL80_.jpg' },
      { id: 36, name: 'Hasbro Star Wars The Child (Baby Yoda) Plush', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzt8cWDadIB_rlPfmhP5qLmhuDUtpzTK-M5Q&s' },
      { id: 37, name: 'Beyblade Burst Turbo Stadium', price: 30, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOvuJiksxB_nBrAazg0N1KWu5KFipfE7bfg&s' },
      { id: 38, name: 'Twister Game', price: 20, imageUrl: 'https://m.media-amazon.com/images/I/51I4hySmHnL.jpg' },
      { id: 39, name: 'Hasbro Marvel Legends Spider-Man Figure', price: 35, imageUrl: 'https://m.media-amazon.com/images/I/815k5V8u7gL.jpg' },
      { id: 40, name: 'Guess Who? Board Game', price: 25, imageUrl: 'https://m.media-amazon.com/images/I/81g0xOuIUqL.jpg' }
    ],
    'fisher-price': [
      { id: 23, name: 'Fisher-Price Laugh & Learn Smart Stages Chair', price: 80, imageUrl: 'https://m.media-amazon.com/images/I/61bb1ix9RyL.jpg' },
      { id: 24, name: 'Fisher-Price Little People Animal Friends Farm', price: 40, imageUrl: 'https://m.media-amazon.com/images/I/81OFpvMjfiL.jpg' },
      { id: 25, name: 'Fisher-Price Rock-a-Stack', price: 15, imageUrl: 'https://m.media-amazon.com/images/I/61lxCYyao0L.jpg' },
      { id: 26, name: 'Fisher-Price Thomas & Friends Wooden Railway', price: 70, imageUrl: 'https://m.media-amazon.com/images/I/71z9O9rW4LL._AC_UF1000,1000_QL80_.jpg' },
      { id: 27, name: 'Fisher-Price Imaginext Batcave', price: 90, imageUrl: 'https://m.media-amazon.com/images/I/61aPxboSuRL.jpg' },
      { id: 28, name: 'Fisher-Price Rescue Heroes Fire Station', price: 60, imageUrl: 'https://m.media-amazon.com/images/I/71Jml3nFiCL._AC_UF1000,1000_QL80_.jpg' },
      { id: 29, name: 'Fisher-Price Musical Lion Walker', price: 50, imageUrl: 'https://m.media-amazon.com/images/I/61oIl6iQjHL.jpg' },
      { id: 30, name: 'Fisher-Price Brilliant Basics Stack & Roll Cups', price: 25, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YjSCyitNv30ene5hvASFOYCBeUY0d69bQg&s' },
      { id: 31, name: 'Fisher-Price Laugh & Learn Puppy', price: 40, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnU7-8donNyFY0J-WG5k2THFWsLp10PDINIg&s' },
      { id: 32, name: 'Fisher-Price Disney Princess Ultimate Celebration Castle', price: 120, imageUrl: 'https://m.media-amazon.com/images/I/81GHDl3r4QS._AC_UF894,1000_QL80_.jpg' },
      
    ],
    'nerf': [
      { id: 41, name: 'Nerf Elite Retaliator Blaster', price: 45, imageUrl: 'https://m.media-amazon.com/images/I/71LvikEWAAL.jpg' },
      { id: 42, name: 'Nerf N-Strike Mega Mastodon', price: 60, imageUrl: 'https://m.media-amazon.com/images/I/815Ppiirp7L.jpg' },
      { id: 43, name: 'Nerf Rival Nemesis MXVII-10K', price: 70, imageUrl: 'https://m.media-amazon.com/images/I/719oOPOzt2L.jpg' },
      { id: 44, name: 'Nerf Ultra One Blaster', price: 50, imageUrl: 'https://m.media-amazon.com/images/I/71XtrYwQAWL.jpg' },
      { id: 45, name: 'Nerf Zombie Strike Hammershot', price: 30, imageUrl: 'https://m.media-amazon.com/images/I/71wYEpQvLUL.jpg' },
      { id: 46, name: 'Nerf Fortnite AR-L Elite Dart Blaster', price: 45, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtn29qtNZTReUZaABq0o5KrS5It5o_GrCP6g&s' },
      { id: 47, name: 'Nerf Mega Thunderhawk Blaster', price: 50, imageUrl: 'https://m.media-amazon.com/images/I/71EwOg5MqlL.jpg' },
      { id: 48, name: 'Nerf Dino Squad Rex Rampage', price: 55, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7fSYojkkqYavgfg9nGATUihFwkklC3eIxA&s' },
      { id: 49, name: 'Nerf Modulus Regulator Blaster', price: 60, imageUrl: 'https://m.media-amazon.com/images/I/71GXVB4OpXL.jpg' },
      { id: 50, name: 'Nerf Elite 2.0 Commander RD-6', price: 40, imageUrl: 'https://m.media-amazon.com/images/I/618wmE01sWL.jpg' }
    ],
    'hotwheels': [
      { id: 51, name: 'Hot Wheels 50-Car Pack', price: 80, imageUrl: 'https://example.com/hotwheels-50pack.jpg' },
      { id: 52, name: 'Hot Wheels Ultimate Garage Playset', price: 150, imageUrl: 'https://example.com/hotwheels-ultimate.jpg' },
      { id: 53, name: 'Hot Wheels Monster Trucks Rev Tread', price: 30, imageUrl: 'https://example.com/hotwheels-monster-rev.jpg' },
      { id: 54, name: 'Hot Wheels Track Builder System', price: 60, imageUrl: 'https://example.com/hotwheels-builder.jpg' },
      { id: 55, name: 'Hot Wheels City Mega Hauler', price: 70, imageUrl: 'https://example.com/hotwheels-mega-hauler.jpg' },
      { id: 56, name: 'Hot Wheels Racing Track Set', price: 50, imageUrl: 'https://example.com/hotwheels-racing-track.jpg' },
      { id: 57, name: 'Hot Wheels Car Culture: Premium Cars Collection', price: 100, imageUrl: 'https://example.com/hotwheels-premium.jpg' },
      { id: 58, name: 'Hot Wheels 1:64 Scale Die-Cast Cars', price: 10, imageUrl: 'https://example.com/hotwheels-diecast.jpg' },
      { id: 59, name: 'Hot Wheels Sky Crash Tower Track Set', price: 80, imageUrl: 'https://example.com/hotwheels-sky-crash.jpg' },
      { id: 60, name: 'Hot Wheels Turbo Racers Track Set', price: 45, imageUrl: 'https://example.com/hotwheels-turbo-racers.jpg' }
    ],
    'barbie': [
      { id: 61, name: 'Barbie Dreamhouse', price: 200, imageUrl: 'https://example.com/barbie-dreamhouse.jpg' },
      { id: 62, name: 'Barbie Fashionista Doll', price: 20, imageUrl: 'https://example.com/barbie-fashionista.jpg' },
      { id: 63, name: 'Barbie Camper Playset', price: 150, imageUrl: 'https://example.com/barbie-camper.jpg' },
      { id: 64, name: 'Barbie Career Doll (Doctor, Scientist, etc.)', price: 30, imageUrl: 'https://example.com/barbie-career.jpg' },
      { id: 65, name: 'Barbie Color Reveal Doll', price: 25, imageUrl: 'https://example.com/barbie-color-reveal.jpg' },
      { id: 66, name: 'Barbie Dreamtopia Rainbow Cove Castle', price: 100, imageUrl: 'https://example.com/barbie-rainbow-cove.jpg' },
      { id: 67, name: 'Barbie Deluxe Styling Head', price: 40, imageUrl: 'https://example.com/barbie-styling-head.jpg' },
      { id: 68, name: 'Barbie Princess Adventure Doll', price: 30, imageUrl: 'https://example.com/barbie-princess-adventure.jpg' },
      { id: 69, name: 'Barbie Skipper Babysitter Inc. Doll Set', price: 35, imageUrl: 'https://example.com/barbie-babysitter.jpg' },
      { id: 70, name: 'Barbie Fashion Design Maker', price: 45, imageUrl: 'https://example.com/barbie-fashion-design.jpg' }
    ],
    'funko-pop': [
      { id: 71, name: 'Funko Pop! Marvel: Spider-Man', price: 15, imageUrl: 'https://example.com/funko-spiderman.jpg' },
      { id: 72, name: 'Funko Pop! Star Wars: Darth Vader', price: 20, imageUrl: 'https://example.com/funko-darth-vader.jpg' },
      { id: 73, name: 'Funko Pop! Disney: Mickey Mouse', price: 15, imageUrl: 'https://example.com/funko-mickey.jpg' },
      { id: 74, name: 'Funko Pop! Harry Potter: Harry Potter', price: 20, imageUrl: 'https://example.com/funko-harry-potter.jpg' },
      { id: 75, name: 'Funko Pop! TV: The Mandalorian', price: 25, imageUrl: 'https://example.com/funko-mandalorian.jpg' },
      { id: 76, name: 'Funko Pop! Animation: Dragon Ball Z - Goku', price: 15, imageUrl: 'https://example.com/funko-goku.jpg' },
      { id: 77, name: 'Funko Pop! Movies: Batman', price: 20, imageUrl: 'https://example.com/funko-batman.jpg' },
      { id: 78, name: 'Funko Pop! Disney: Elsa (Frozen)', price: 20, imageUrl: 'https://example.com/funko-elsa.jpg' },
      { id: 79, name: 'Funko Pop! Games: Overwatch - Tracer', price: 15, imageUrl: 'https://example.com/funko-tracer.jpg' },
      { id: 80, name: 'Funko Pop! Music: Freddie Mercury', price: 20, imageUrl: 'https://example.com/funko-freddie.jpg' }
    ]
  };

  const selectedItems = brandItems[brand.toLowerCase()] || [];

  // Check if there are no items found
  if (!selectedItems.length) {
    return <div>No items found for this brand.</div>;
  }

  return (
    <div className="brand-items-page">
      <h2>{brand.replace(/-/g, ' ').toUpperCase()} Items</h2>
      <div className="item-grid">
        {selectedItems.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => {
  addToCart(item); // Add the item to the cart
  alert(`${item.name} has been added to your cart!`); // Show the alert message
}}>
  Buy Now
</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandItems;
