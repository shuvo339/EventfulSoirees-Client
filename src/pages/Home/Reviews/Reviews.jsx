import { Link } from "react-router-dom";
import UseAuth from "../../../hooks/UseAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Reviews = () => {
  const { user } = UseAuth();
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = user.displayName;
    const userPic = user.photoURL;
    const eventName = form.eventName.value;
    const providerName = form.providerName.value;
    const overallRating = form.overallRating.value;
    const quality = form.quality.value;
    const professionalism = form.professionalism.value;
    const creativity = form.creativity.value;
    const attitude = form.attitude.value;
    const coordination = form.coordination.value;
    const opinion = form.opinion.value;
    const review = {
      userName,
      userPic,
      eventName,
      providerName,
      overallRating,
      quality,
      professionalism,
      creativity,
      attitude,
      coordination,
      opinion,
    };
    axios.post("http://localhost:5000/reviews", review).then((data) => {
      if (data.data.insertedId) {
        toast.success("Your review has been posted");
      }
      form.reset();
    });
  };

  useEffect(() => {
    axios("http://localhost:5000/reviews").then((data) => {
      setReviews(data.data);
    });
  }, []);
  return (
    <div className="md:mt-24 mt-12">
      <h2 className="text-3xl md:text-5xl font-bold">Reviews</h2>
      <h2 className="text-xl text-gray-400 font-bold pb-8">
        Hear from Our Clients
      </h2>
      <div className="flex md:flex-row flex-col gap-8">
        {/* write reviews  */}
        <div className="px-4 w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="flex md:flex-row flex-col gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-lg">Event Name</span>
                </label>
                <input
                  type="text"
                  name="eventName"
                  placeholder="Event name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-lg">Service Provider Name</span>
                </label>
                <input
                  type="text"
                  name="providerName"
                  placeholder="Service provider name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
              <div>
                <label>Overall Rating:</label>
                <select name="overallRating">
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div>
                <label>Quality of Service:</label>
                <select name="quality">
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div>
                <label>Professionalism:</label>
                <select name="professionalism">
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div>
                <label>Creativity:</label>
                <select name="creativity">
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div>
                <label>Behavior:</label>
                <select name="attitude">
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div>
                <label>Coordination:</label>
                <select name="coordination">
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
            </div>
            <label className="form-control mt-5">
              <div className="label">
                <span>Your Opinion</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                name="opinion"
                placeholder="Your opinion"
              ></textarea>
            </label>
            <div className="flex justify-center mt-6">
              {user ? (
                <input
                  className="btn bg-[#9ACCC9] w-1/2 font-semibold text-lg"
                  type="submit"
                  value="Post Your Feedback"
                />
              ) : (
                <Link to="/login">
                  <p className="btn mt-3 font-semibold text-lg">
                    Please Login First to Leave a Review
                  </p>
                </Link>
              )}
            </div>
          </form>
        </div>
        {/* show Reviews  */}
        <div className="w-1/2 p-3">
          <div className="flex justify-between items-center border-b-2 pb-2">
            <h2 className="text-3xl text-center font-semibold">
              Users Feedback
            </h2>
            <p className="text-lg font-semibold bg-blue-50 p-2 rounded-lg">
              Total Reviews: {reviews.length}
            </p>
          </div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center rounded-lg py-4 mx-10 bg-blue-50 space-y-2 shadow-lg">
                <div className="flex items-center gap-4">
                      <img className="!size-16 border-4 rounded-lg !object-contain" src={review.userPic} alt="" />
                        <h2 className="font-bold">{review.userName}</h2>
                  </div>
                  <div className="flex gap-4">
                    <Rating
                      className="text-blue-300"
                      style={{ maxWidth: 140 }}
                      value={review.overallRating}
                      readOnly
                    />
                    <div className="text-2xl font-semibold flex items-center">
                      {review.overallRating > 4
                        ? "Excellent"
                        : review.overallRating > 3
                        ? "Good"
                        : "Poor"}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold">
                    {review.eventName} by {review.providerName}
                  </h2>
                  <p className="opacity-85">{review.opinion}</p>
                  <div>
                    <p className="text-right">
                      <span className="pr-3">Quality of Service:</span>
                      <progress
                        className="progress progress-info w-56"
                        value={review.quality}
                        max="5"
                      ></progress>
                    </p>
                    <p className="text-right">
                      <span className="pr-3">Professionalism:</span>
                      <progress
                        className="progress progress-info w-56"
                        value={review.professionalism}
                        max="5"
                      ></progress>
                    </p>
                    <p className="text-right">
                      <span className="pr-3">Creativity:</span>
                      <progress
                        className="progress progress-info w-56"
                        value={review.creativity}
                        max="5"
                      ></progress>
                    </p>
                    <p className="text-right">
                      <span className="pr-3">Behavior:</span>
                      <progress
                        className="progress progress-info w-56"
                        value={review.attitude}
                        max="5"
                      ></progress>
                    </p>
                    <p className="text-right">
                      <span className="pr-3">Coordination:</span>
                      <progress
                        className="progress progress-info w-56"
                        value={review.coordination}
                        max="5"
                      ></progress>
                    </p>
                  </div>
                 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
