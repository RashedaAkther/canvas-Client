
const MyReviews = () => {
    return (
     <div className="grid grid-cols-2">
           <div className="card shadow-lg w-72 p-5 text-yellow-600 font-medium">
          <p>Property tittle: Banglo</p>
          <p>Agent Name : Jhon Deol</p>
          <p>Review time: 22/10/2023</p>
          <p>Review:
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-gray-700">
          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
          </svg>
            <span>The residence boasts an ideal location, with easy access to parks, schools, and local amenities. The neighborhood exudes tranquility, providing a peaceful retreat from the hustle and bustle of city life.</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-gray-700">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
            </p>
            <div className="flex justify-center items-center m-3">
           

                <button className="btn bg-yellow-400 text-white font-semibold hover:bg-yellow-600">Delete</button>
            </div>
        </div>
     </div>
    );
};

export default MyReviews;