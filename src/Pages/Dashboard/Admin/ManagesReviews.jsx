import { FaTimesCircle } from "react-icons/fa";
import useReviews from "../../../Hooks/useReviews";


const ManagesReviews = () => {
	const [reviews,refetch,isLoading]=useReviews()
    return (
        <div className="grid grid-cols-2 gap-8">
{
	reviews?.map(review=>{
		<div className="max-w-xs rounded-md shadow-lg bg-yellow-50 dark:bg-gray-900 dark:text-gray-100">
		<div className="grid justify-center items-center">
		<img src={review?.image} alt="" className="object-cover object-center w-36 rounded-full h-36 dark:bg-gray-500" />
		</div>
		<div className="flex flex-col justify-between p-6 space-y-8">
			<div className="space-y-2">
				<h2 className="text-3xl text-yellow-600 font-semibold tracki">{review?.name}</h2>
				<p className="text-yellow-600">{review?.email}</p>
				<p className="text-yellow-800">{review?.details}</p>
			</div>
			<button type="button"  className=" btn flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-yellow-400 hover:bg-yellow-600 text-white dark:bg-violet-400 dark:text-gray-900"><FaTimesCircle></FaTimesCircle> Delete</button>
		</div>
	</div>
	})
}
     <div className="max-w-xs rounded-md shadow-lg bg-yellow-50 dark:bg-gray-900 dark:text-gray-100">
	<div className="grid justify-center items-center">
    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-36 rounded-full h-36 dark:bg-gray-500" />
  
    </div>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl text-yellow-600 font-semibold tracki">Donec lectus leo</h2>
            <p className="text-yellow-600">hsjhsdjd@gmail.com</p>
			<p className="text-yellow-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-yellow-400 hover:bg-yellow-600 text-white dark:bg-violet-400 dark:text-gray-900"><FaTimesCircle></FaTimesCircle> Delete</button>
	</div>
</div>
     <div className="max-w-xs rounded-md shadow-lg bg-yellow-50 dark:bg-gray-900 dark:text-gray-100">
	<div className="grid justify-center items-center">
    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-36 rounded-full h-36 dark:bg-gray-500" />
  
    </div>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl text-yellow-600 font-semibold tracki">Donec lectus leo</h2>
            <p className="text-yellow-600">hsjhsdjd@gmail.com</p>
			<p className="text-yellow-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-yellow-400 hover:bg-yellow-600 text-white dark:bg-violet-400 dark:text-gray-900"><FaTimesCircle></FaTimesCircle> Delete</button>
	</div>
</div>
     <div className="max-w-xs rounded-md shadow-lg bg-yellow-50 dark:bg-gray-900 dark:text-gray-100">
	<div className="grid justify-center items-center">
    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-36 rounded-full h-36 dark:bg-gray-500" />
  
    </div>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl text-yellow-600 font-semibold tracki">Donec lectus leo</h2>
            <p className="text-yellow-600">hsjhsdjd@gmail.com</p>
			<p className="text-yellow-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className=" btn flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-yellow-400 hover:bg-yellow-600 text-white dark:bg-violet-400 dark:text-gray-900"><FaTimesCircle></FaTimesCircle> Delete</button>
	</div>
</div>
    </div>
    );
};

export default ManagesReviews;