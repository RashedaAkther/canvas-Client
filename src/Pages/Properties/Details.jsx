import { Link } from "react-router-dom";


const Details = () => {
    return (
        <div>
                   <div className="flex flex-col max-w-sm p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	
	<div>
		<img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover rounded w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl text-yellow-600 font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
		<p className="text-sm dark:text-yellow-500">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
	</div>
    <div className="flex space-x-4">
		<img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
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
     <button  className="btn btn-xl bg-yellow-600 text-white hover:bg-yellow-500">ADD TO WISHLIST</button></Link>
		
			<button className="btn bg-yellow-600 text-white hover:bg-yellow-500">Review</button>
		
	</div>
</div>
        </div>
    );
};

export default Details;