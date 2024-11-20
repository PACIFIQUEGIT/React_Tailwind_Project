


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Heart, DollarSign, Globe, HandHeart, CreditCard } from "lucide-react";


// const Donate = () => {
//   const navigate = useNavigate();
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [country, setCountry] = useState("");
//   const [city, setCity] = useState("");
//   const [amount, setAmount] = useState(50);
//   const [selectedAmount, setSelectedAmount] = useState(50);
//   const [donationType, setDonationType] = useState("oneTime");
//   const [paymentMethod, setPaymentMethod] = useState(null);

//   const donationAmounts = [50, 100, 500, 1000];

//   const handleAmountClick = (selectedAmount) => {
//     setAmount(selectedAmount);
//     setSelectedAmount(selectedAmount);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!paymentMethod) {
//       alert("Please select a payment method");
//       return;
//     }
//     navigate("/payment", {
//       state: {
//         firstName,
//         lastName,
//         email,
//         country,
//         city,
//         amount,
//         donationType,
//         paymentMethod,
//       },
//     });
//   };

//   useEffect(() => {
//     if (paymentMethod === "paypal") {
//       setAmount(50); // Set default donation amount for PayPal
//     }
//   }, [paymentMethod]);

//   return (
//     <div className="bg-gradient-to-br  min-h-screen p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center justify-center mb-8">
//           <HandHeart className="text-green-600 mr-4" size={48} />
//           <h1 className="text-4xl font-extrabold text-green-800">
//             Support Our Mission
//           </h1>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Donation Form */}
//           <div className="bg-white shadow-2xl rounded-2xl p-8 border-2 border-green-100">
//             {/* Donation Type Selection */}
//             <div className="flex justify-center mb-6">
//               <div className="bg-green-100 rounded-lg p-1 flex">
//                 <button
//                   className={`px-4 py-2 rounded-lg transition-colors ${
//                     donationType === "oneTime"
//                       ? "bg-green-600 text-white"
//                       : "text-green-800 hover:bg-green-200"
//                   }`}
//                   onClick={() => setDonationType("oneTime")}
//                 >
//                   One-Time Donation
//                 </button>
//                 <button
//                   className={`px-4 py-2 rounded-lg transition-colors ${
//                     donationType === "monthly"
//                       ? "bg-green-600 text-white"
//                       : "text-green-800 hover:bg-green-200"
//                   }`}
//                   onClick={() => setDonationType("monthly")}
//                 >
//                   Monthly Donation
//                 </button>
//               </div>
//             </div>

//             {/* Donation Amount Selection */}
//             <div className="mb-6 text-center">
//               <h2 className="text-2xl font-bold text-green-800 mb-4">
//                 Choose Your Contribution
//               </h2>
//               <div className="flex justify-center space-x-4">
//                 {donationAmounts.map((donationAmount) => (
//                   <button
//                     key={donationAmount}
//                     className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center ${
//                       selectedAmount === donationAmount
//                         ? "bg-green-600 text-white scale-105"
//                         : "bg-green-100 text-green-800 hover:bg-green-200"
//                     }`}
//                     onClick={() => handleAmountClick(donationAmount)}
//                   >
//                     <DollarSign size={20} className="mr-2" />
//                     {donationAmount}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Payment Method Selection */}
//             <div className="flex justify-center space-x-4 mb-6">
//               <button
//                 className={`px-6 py-3 rounded-lg flex items-center transition-all ${
//                   paymentMethod === "paypal"
//                     ? "bg-blue-600 text-white scale-105"
//                     : "bg-yellow-500 text-white font-bold hover:bg-green-500"
//                 }`}
//                 onClick={() => setPaymentMethod("paypal")}
//               >
//                 Pay with PayPal
//               </button>
//               <button
//                 className={`px-6 py-3 rounded-lg flex items-center transition-all ${
//                   paymentMethod === "card"
//                     ? "bg-green-600 text-white scale-105"
//                     : "bg-green-100 text-green-800 hover:bg-green-200 font-bold"
//                 }`}
//                 onClick={() => setPaymentMethod("card")}
//               >
//                 <CreditCard className="mr-2" size={24} />
//                 Pay with Card
//               </button>
//             </div>

//             {/* Donation Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
//                   placeholder="First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   required
//                 />
//                 <input
//                   className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
//                   placeholder="Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   required
//                 />
//               </div>

//               <input
//                 type="email"
//                 className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
//                 placeholder="Email Address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />

//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
//                   placeholder="Country"
//                   value={country}
//                   onChange={(e) => setCountry(e.target.value)}
//                   required
//                 />
//                 <select
//                   className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   required
//                 >
//                   <option value="">Select City</option>
//                   <option value="Kigali">Kigali</option>
//                   <option value="Nairobi">Nairobi</option>
//                   <option value="Dar Es Salaam">Dar Es Salaam</option>
//                   <option value="Mombasa">Mombasa</option>
//                   <option value="Accra">Accra</option>
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-bold"
//               >
//                 <Heart className="mr-2" size={24} />
//                 Donate {amount} USD{" "}
//                 {donationType === "monthly" ? "Monthly" : ""}
//               </button>
//             </form>
//           </div>

//           {/* Impact Section */}
//           <div className="bg-green-600 text-white rounded-2xl p-8 flex flex-col justify-between shadow-2xl">
//             <div>
//               <h2 className="text-3xl font-bold mb-6 flex items-center">
//                 <Globe className="mr-4" size={40} />
//                 Why Your Donation Matters
//               </h2>
//               <div className="space-y-4">
//                 <p className="text-lg leading-relaxed">
//                   Your donations support our ongoing efforts to provide clean
//                   water, education, and healthcare to communities in need. With
//                   your help, we can continue to make a significant impact and
//                   improve lives around the world. Every contribution, no matter
//                   the size, makes a difference. Thank you for your generosity
//                   and support.
//                 </p>
//                 <div className="bg-green-700 p-4 rounded-lg">
//                   <h3 className="font-bold text-xl mb-2">Global Reach</h3>
//                   <p>
//                     Your donation supports local communities worldwide,
//                     impacting thousands of lives.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* PayPal Button Integration */}
     
//     </div>
//   );
// };

// export default Donate;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, DollarSign, Globe, HandHeart, CreditCard } from "lucide-react";

const Donate = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [amount, setAmount] = useState(50);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [donationType, setDonationType] = useState("oneTime");
  const [paymentMethod, setPaymentMethod] = useState(null);

  const donationAmounts = [50, 100, 500, 1000];

  const handleAmountClick = (selectedAmount) => {
    setAmount(selectedAmount);
    setSelectedAmount(selectedAmount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    navigate("/payment", {
      state: {
        firstName,
        lastName,
        email,
        country,
        city,
        amount,
        donationType,
        paymentMethod,
      },
    });
  };

  useEffect(() => {
    if (paymentMethod === "paypal") {
      setAmount(50); // Set default donation amount for PayPal
    }
  }, [paymentMethod]);

  return (
    <div className="bg-gradient-to-br min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <HandHeart className="text-green-600 mb-4" size={48} />
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-800">
            Support Our Mission
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Donation Form */}
          <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 border-2 border-green-100">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-lg p-1 flex">
                <button
                  className={`px-4 py-2 rounded-lg text-sm md:text-base transition-colors ${
                    donationType === "oneTime"
                      ? "bg-green-600 text-white"
                      : "text-green-800 hover:bg-green-200"
                  }`}
                  onClick={() => setDonationType("oneTime")}
                >
                  One-Time Donation
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm md:text-base transition-colors ${
                    donationType === "monthly"
                      ? "bg-green-600 text-white"
                      : "text-green-800 hover:bg-green-200"
                  }`}
                  onClick={() => setDonationType("monthly")}
                >
                  Monthly Donation
                </button>
              </div>
            </div>

            <div className="mb-6 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-4">
                Choose Your Contribution
              </h2>
              <div className="grid grid-cols-2 gap-4 md:flex md:justify-center">
                {donationAmounts.map((donationAmount) => (
                  <button
                    key={donationAmount}
                    className={`px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-300 flex items-center justify-center ${
                      selectedAmount === donationAmount
                        ? "bg-green-600 text-white scale-105"
                        : "bg-green-100 text-green-800 hover:bg-green-200"
                    }`}
                    onClick={() => handleAmountClick(donationAmount)}
                  >
                    <DollarSign size={16} className="mr-2" />
                    {donationAmount}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <button
                className={`px-6 py-3 rounded-lg text-sm md:text-base flex items-center transition-all ${
                  paymentMethod === "paypal"
                    ? "bg-blue-600 text-white scale-105"
                    : "bg-yellow-500 text-white font-bold hover:bg-green-500"
                }`}
                onClick={() => setPaymentMethod("paypal")}
              >
                Pay with PayPal
              </button>
              <button
                className={`px-6 py-3 rounded-lg text-sm md:text-base flex items-center transition-all ${
                  paymentMethod === "card"
                    ? "bg-green-600 text-white scale-105"
                    : "bg-green-100 text-green-800 hover:bg-green-200 font-bold"
                }`}
                onClick={() => setPaymentMethod("card")}
              >
                <CreditCard className="mr-2" size={20} />
                Pay with Card
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <input
                type="email"
                className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
                <select
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                >
                  <option value="">Select City</option>
                  <option value="Kigali">Kigali</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Dar Es Salaam">Dar Es Salaam</option>
                  <option value="Mombasa">Mombasa</option>
                  <option value="Accra">Accra</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-bold"
              >
                <Heart className="mr-2" size={20} />
                Donate {amount} USD{" "}
                {donationType === "monthly" ? "Monthly" : ""}
              </button>
            </form>
          </div>

          {/* Impact Section */}
          <div className="bg-green-600 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <Globe className="mr-4" size={32} />
                Why Your Donation Matters
              </h2>
              <div className="space-y-4">
                <p className="text-sm md:text-lg leading-relaxed">
                  Your donations support our ongoing efforts to provide clean
                  water, education, and healthcare to communities in need.
                </p>
                <div className="bg-green-700 p-4 rounded-lg">
                  <h3 className="font-bold text-lg md:text-xl mb-2">
                    Global Reach
                  </h3>
                  <p>
                    Your donation supports local communities worldwide,
                    impacting thousands of lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
