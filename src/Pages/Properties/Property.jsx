import { Link } from "react-router-dom";



const Property = () => {
    return (
        <div className="grid grid-cols-3 justify-around items-center ml-20">
			{/* <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
			<div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
			<div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */}
            <div className="flex flex-col w-80 p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	
	<div>
		<img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover rounded w-72 mb-4 h-44 sm:h-44 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl text-yellow-600 font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
		<p className="text-sm dark:text-yellow-500">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
	</div>
    <div className="flex space-x-4">
		<img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-10 h-10 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm text-yellow-600 font-semibold">Leroy Jenkins</a>
			<span className="text-xs dark:text-gray-400">4 hours ago</span>
		</div>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
	</div>
	<div className="grid grid-cols-2 gap-2 items-center justify-between">
		<Link to={"/property-details"}>
     <button  className="btn btn-xl bg-yellow-600 text-white hover:bg-yellow-500">Details</button></Link>
		
			<button className="btn bg-yellow-600 text-white hover:bg-yellow-500">Review</button>
		
	</div>
</div>
            <div className="flex flex-col w-80 p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	
	<div>
		<img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover rounded w-72 mb-4 h-44 sm:h-44 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl text-yellow-600 font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
		<p className="text-sm dark:text-yellow-500">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
	</div>
    <div className="flex space-x-4">
		<img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-10 h-10 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm text-yellow-600 font-semibold">Leroy Jenkins</a>
			<span className="text-xs dark:text-gray-400">4 hours ago</span>
		</div>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
	</div>
	<div className="grid grid-cols-2 gap-2 items-center justify-between">
		<Link to={"/property-details"}>
     <button  className="btn btn-xl bg-yellow-600 text-white hover:bg-yellow-500">Details</button></Link>
		
			<button className="btn bg-yellow-600 text-white hover:bg-yellow-500">Review</button>
		
	</div>
</div>
            <div className="flex flex-col w-80 p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	
	<div>
		<img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover rounded w-72 mb-4 h-44 sm:h-44 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl text-yellow-600 font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
		<p className="text-sm dark:text-yellow-500">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
	</div>
    <div className="flex space-x-4">
		<img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-10 h-10 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm text-yellow-600 font-semibold">Leroy Jenkins</a>
			<span className="text-xs dark:text-gray-400">4 hours ago</span>
		</div>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
	</div>
	<div className="grid grid-cols-2 gap-2 items-center justify-between">
		<Link to={"/property-details"}>
     <button  className="btn btn-xl bg-yellow-600 text-white hover:bg-yellow-500">Details</button></Link>
		
			<button className="btn bg-yellow-600 text-white hover:bg-yellow-500">Review</button>
		
	</div>
</div>
        </div>
    );
};

export default Property;