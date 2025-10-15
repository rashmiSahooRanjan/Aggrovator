  // Utility function to format numbers (Indian style)
    const formatNumber = (num) => num.toLocaleString('en-IN');

    // Initial dataset loaded from the provided CSV data
    let DB = {
    "crops": [
        {
            "name": "Basmati Rice (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 2500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 2400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Assam",
                    "price": 2350,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Bihar",
                    "price": 2300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 2250,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Goa",
                    "price": 2450,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Gujarat",
                    "price": 2550,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Haryana",
                    "price": 2700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 2400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Jharkhand",
                    "price": 2300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Karnataka",
                    "price": 2450,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Kerala",
                    "price": 2500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 2200,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Maharashtra",
                    "price": 2350,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Manipur",
                    "price": 2400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Meghalaya",
                    "price": 2380,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Mizoram",
                    "price": 2350,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Nagaland",
                    "price": 2400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Odisha",
                    "price": 2200,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Punjab",
                    "price": 2750,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Rajasthan",
                    "price": 2500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Sikkim",
                    "price": 2600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 2450,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Telangana",
                    "price": 2400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Tripura",
                    "price": 2350,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 2600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Uttarakhand",
                    "price": 2550,
                    "unit": "₹/quintal"
                },
                {
                    "state": "West Bengal",
                    "price": 2400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 2650,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Chandigarh",
                    "price": 2700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 2500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Delhi",
                    "price": 2700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 2650,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Ladakh",
                    "price": 2800,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Lakshadweep",
                    "price": 2900,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Puducherry",
                    "price": 2500,
                    "unit": "₹/quintal"
                }
            ],
            "desc": "Aromatic",
            "variety": "Aromatic"
        },
        {
            "name": "Moong Dal (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 7200,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 7500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Assam",
                    "price": 7600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Bihar",
                    "price": 7000,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 7100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Goa",
                    "price": 7800,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Gujarat",
                    "price": 7400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Haryana",
                    "price": 7500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 7700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Jharkhand",
                    "price": 7300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Karnataka",
                    "price": 7450,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Kerala",
                    "price": 7900,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 7150,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Maharashtra",
                    "price": 7350,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Manipur",
                    "price": 7600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Meghalaya",
                    "price": 7550,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Mizoram",
                    "price": 7700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Nagaland",
                    "price": 7650,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Odisha",
                    "price": 7100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Punjab",
                    "price": 7500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Rajasthan",
                    "price": 7300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Sikkim",
                    "price": 7800,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 7600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Telangana",
                    "price": 7400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Tripura",
                    "price": 7550,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 7450,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Uttarakhand",
                    "price": 7650,
                    "unit": "₹/quintal"
                },
                {
                    "state": "West Bengal",
                    "price": 7500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 7950,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Chandigarh",
                    "price": 7500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 7400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Delhi",
                    "price": 7600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 7700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Ladakh",
                    "price": 8000,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Lakshadweep",
                    "price": 8100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Puducherry",
                    "price": 7500,
                    "unit": "₹/quintal"
                }
            ],
            "desc": "High Protein",
            "variety": "High Protein"
        },
        {
            "name": "Soybean Seed (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 4500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 4700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Assam",
                    "price": 4650,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Bihar",
                    "price": 4400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 4350,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Goa",
                    "price": 4800,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Gujarat",
                    "price": 4600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Haryana",
                    "price": 4550,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 4750,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Jharkhand",
                    "price": 4450,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Karnataka",
                    "price": 4550,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Kerala",
                    "price": 4900,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 4300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Maharashtra",
                    "price": 4400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Manipur",
                    "price": 4600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Meghalaya",
                    "price": 4580,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Mizoram",
                    "price": 4700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Nagaland",
                    "price": 4650,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Odisha",
                    "price": 4350,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Punjab",
                    "price": 4600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Rajasthan",
                    "price": 4500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Sikkim",
                    "price": 4800,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 4650,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Telangana",
                    "price": 4500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Tripura",
                    "price": 4600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 4550,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Uttarakhand",
                    "price": 4700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "West Bengal",
                    "price": 4600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 4950,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Chandigarh",
                    "price": 4600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 4500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Delhi",
                    "price": 4700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 4800,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Ladakh",
                    "price": 5000,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Lakshadweep",
                    "price": 5100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Puducherry",
                    "price": 4600,
                    "unit": "₹/quintal"
                }
            ],
            "desc": "High Oil Content",
            "variety": "High Oil Content"
        }
    ],
    "seeds": [
        {
            "name": "High Yield Paddy Seed (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 8000,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 8200,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Assam",
                    "price": 8100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Bihar",
                    "price": 7800,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 7900,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Goa",
                    "price": 8300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Gujarat",
                    "price": 8050,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Haryana",
                    "price": 8150,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 8300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Jharkhand",
                    "price": 7950,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Karnataka",
                    "price": 8050,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Kerala",
                    "price": 8400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 7850,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Maharashtra",
                    "price": 7950,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Manipur",
                    "price": 8100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Meghalaya",
                    "price": 8080,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Mizoram",
                    "price": 8200,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Nagaland",
                    "price": 8150,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Odisha",
                    "price": 7900,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Punjab",
                    "price": 8100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Rajasthan",
                    "price": 8000,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Sikkim",
                    "price": 8300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 8150,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Telangana",
                    "price": 8000,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Tripura",
                    "price": 8100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 8050,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Uttarakhand",
                    "price": 8200,
                    "unit": "₹/quintal"
                },
                {
                    "state": "West Bengal",
                    "price": 8100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 8450,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Chandigarh",
                    "price": 8100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 8000,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Delhi",
                    "price": 8200,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 8300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Ladakh",
                    "price": 8500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Lakshadweep",
                    "price": 8600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Puducherry",
                    "price": 8100,
                    "unit": "₹/quintal"
                }
            ],
            "desc": "Disease Resistant",
            "variety": "Disease Resistant"
        },
        {
            "name": "Hybrid Maize Seed (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 3500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 3700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Assam",
                    "price": 3600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Bihar",
                    "price": 3300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 3400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Goa",
                    "price": 3800,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Gujarat",
                    "price": 3550,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Haryana",
                    "price": 3650,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 3750,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Jharkhand",
                    "price": 3450,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Karnataka",
                    "price": 3550,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Kerala",
                    "price": 3900,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 3350,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Maharashtra",
                    "price": 3450,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Manipur",
                    "price": 3600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Meghalaya",
                    "price": 3580,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Mizoram",
                    "price": 3700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Nagaland",
                    "price": 3650,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Odisha",
                    "price": 3400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Punjab",
                    "price": 3600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Rajasthan",
                    "price": 3500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Sikkim",
                    "price": 3800,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 3650,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Telangana",
                    "price": 3500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Tripura",
                    "price": 3600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 3550,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Uttarakhand",
                    "price": 3700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "West Bengal",
                    "price": 3600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 3950,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Chandigarh",
                    "price": 3600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 3500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Delhi",
                    "price": 3700,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 3800,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Ladakh",
                    "price": 4000,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Lakshadweep",
                    "price": 4100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Puducherry",
                    "price": 3600,
                    "unit": "₹/quintal"
                }
            ],
            "desc": "Drought Tolerant",
            "variety": "Drought Tolerant"
        },
        {
            "name": "Pest Resistant Cotton Seed (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 10000,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 10200,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Assam",
                    "price": 10100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Bihar",
                    "price": 9800,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 9900,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Goa",
                    "price": 10300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Gujarat",
                    "price": 10050,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Haryana",
                    "price": 10150,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 10300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Jharkhand",
                    "price": 9950,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Karnataka",
                    "price": 10050,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Kerala",
                    "price": 10400,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 9850,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Maharashtra",
                    "price": 9950,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Manipur",
                    "price": 10100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Meghalaya",
                    "price": 10080,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Mizoram",
                    "price": 10200,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Nagaland",
                    "price": 10150,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Odisha",
                    "price": 9900,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Punjab",
                    "price": 10100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Rajasthan",
                    "price": 10000,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Sikkim",
                    "price": 10300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 10150,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Telangana",
                    "price": 10000,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Tripura",
                    "price": 10100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 10050,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Uttarakhand",
                    "price": 10200,
                    "unit": "₹/quintal"
                },
                {
                    "state": "West Bengal",
                    "price": 10100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 10450,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Chandigarh",
                    "price": 10100,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 10000,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Delhi",
                    "price": 10200,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 10300,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Ladakh",
                    "price": 10500,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Lakshadweep",
                    "price": 10600,
                    "unit": "₹/quintal"
                },
                {
                    "state": "Puducherry",
                    "price": 10100,
                    "unit": "₹/quintal"
                }
            ],
            "desc": "Pest Resistant",
            "variety": "Pest Resistant"
        }
    ],
    "fertilizers": [
        {
            "name": "DAP (Di-Ammonium Phosphate) (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 1350,
                    "unit": "₹/bag"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 1450,
                    "unit": "₹/bag"
                },
                {
                    "state": "Assam",
                    "price": 1400,
                    "unit": "₹/bag"
                },
                {
                    "state": "Bihar",
                    "price": 1300,
                    "unit": "₹/bag"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 1320,
                    "unit": "₹/bag"
                },
                {
                    "state": "Goa",
                    "price": 1480,
                    "unit": "₹/bag"
                },
                {
                    "state": "Gujarat",
                    "price": 1380,
                    "unit": "₹/bag"
                },
                {
                    "state": "Haryana",
                    "price": 1350,
                    "unit": "₹/bag"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 1420,
                    "unit": "₹/bag"
                },
                {
                    "state": "Jharkhand",
                    "price": 1340,
                    "unit": "₹/bag"
                },
                {
                    "state": "Karnataka",
                    "price": 1370,
                    "unit": "₹/bag"
                },
                {
                    "state": "Kerala",
                    "price": 1490,
                    "unit": "₹/bag"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 1310,
                    "unit": "₹/bag"
                },
                {
                    "state": "Maharashtra",
                    "price": 1330,
                    "unit": "₹/bag"
                },
                {
                    "state": "Manipur",
                    "price": 1400,
                    "unit": "₹/bag"
                },
                {
                    "state": "Meghalaya",
                    "price": 1390,
                    "unit": "₹/bag"
                },
                {
                    "state": "Mizoram",
                    "price": 1450,
                    "unit": "₹/bag"
                },
                {
                    "state": "Nagaland",
                    "price": 1410,
                    "unit": "₹/bag"
                },
                {
                    "state": "Odisha",
                    "price": 1320,
                    "unit": "₹/bag"
                },
                {
                    "state": "Punjab",
                    "price": 1360,
                    "unit": "₹/bag"
                },
                {
                    "state": "Rajasthan",
                    "price": 1350,
                    "unit": "₹/bag"
                },
                {
                    "state": "Sikkim",
                    "price": 1470,
                    "unit": "₹/bag"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 1390,
                    "unit": "₹/bag"
                },
                {
                    "state": "Telangana",
                    "price": 1340,
                    "unit": "₹/bag"
                },
                {
                    "state": "Tripura",
                    "price": 1400,
                    "unit": "₹/bag"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 1350,
                    "unit": "₹/bag"
                },
                {
                    "state": "Uttarakhand",
                    "price": 1400,
                    "unit": "₹/bag"
                },
                {
                    "state": "West Bengal",
                    "price": 1380,
                    "unit": "₹/bag"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 1500,
                    "unit": "₹/bag"
                },
                {
                    "state": "Chandigarh",
                    "price": 1350,
                    "unit": "₹/bag"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 1370,
                    "unit": "₹/bag"
                },
                {
                    "state": "Delhi",
                    "price": 1400,
                    "unit": "₹/bag"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 1450,
                    "unit": "₹/bag"
                },
                {
                    "state": "Ladakh",
                    "price": 1550,
                    "unit": "₹/bag"
                },
                {
                    "state": "Lakshadweep",
                    "price": 1600,
                    "unit": "₹/bag"
                },
                {
                    "state": "Puducherry",
                    "price": 1380,
                    "unit": "₹/bag"
                }
            ],
            "desc": "18% N, 46% P2O5",
            "nutrient": "18% N"
        },
        {
            "name": "MOP (Muriate of Potash) (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 1700,
                    "unit": "₹/bag"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 1800,
                    "unit": "₹/bag"
                },
                {
                    "state": "Assam",
                    "price": 1750,
                    "unit": "₹/bag"
                },
                {
                    "state": "Bihar",
                    "price": 1650,
                    "unit": "₹/bag"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 1680,
                    "unit": "₹/bag"
                },
                {
                    "state": "Goa",
                    "price": 1900,
                    "unit": "₹/bag"
                },
                {
                    "state": "Gujarat",
                    "price": 1750,
                    "unit": "₹/bag"
                },
                {
                    "state": "Haryana",
                    "price": 1700,
                    "unit": "₹/bag"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 1820,
                    "unit": "₹/bag"
                },
                {
                    "state": "Jharkhand",
                    "price": 1690,
                    "unit": "₹/bag"
                },
                {
                    "state": "Karnataka",
                    "price": 1730,
                    "unit": "₹/bag"
                },
                {
                    "state": "Kerala",
                    "price": 1950,
                    "unit": "₹/bag"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 1660,
                    "unit": "₹/bag"
                },
                {
                    "state": "Maharashtra",
                    "price": 1690,
                    "unit": "₹/bag"
                },
                {
                    "state": "Manipur",
                    "price": 1750,
                    "unit": "₹/bag"
                },
                {
                    "state": "Meghalaya",
                    "price": 1740,
                    "unit": "₹/bag"
                },
                {
                    "state": "Mizoram",
                    "price": 1800,
                    "unit": "₹/bag"
                },
                {
                    "state": "Nagaland",
                    "price": 1760,
                    "unit": "₹/bag"
                },
                {
                    "state": "Odisha",
                    "price": 1680,
                    "unit": "₹/bag"
                },
                {
                    "state": "Punjab",
                    "price": 1710,
                    "unit": "₹/bag"
                },
                {
                    "state": "Rajasthan",
                    "price": 1700,
                    "unit": "₹/bag"
                },
                {
                    "state": "Sikkim",
                    "price": 1870,
                    "unit": "₹/bag"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 1780,
                    "unit": "₹/bag"
                },
                {
                    "state": "Telangana",
                    "price": 1690,
                    "unit": "₹/bag"
                },
                {
                    "state": "Tripura",
                    "price": 1750,
                    "unit": "₹/bag"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 1700,
                    "unit": "₹/bag"
                },
                {
                    "state": "Uttarakhand",
                    "price": 1750,
                    "unit": "₹/bag"
                },
                {
                    "state": "West Bengal",
                    "price": 1730,
                    "unit": "₹/bag"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 2000,
                    "unit": "₹/bag"
                },
                {
                    "state": "Chandigarh",
                    "price": 1700,
                    "unit": "₹/bag"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 1720,
                    "unit": "₹/bag"
                },
                {
                    "state": "Delhi",
                    "price": 1750,
                    "unit": "₹/bag"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 1800,
                    "unit": "₹/bag"
                },
                {
                    "state": "Ladakh",
                    "price": 1950,
                    "unit": "₹/bag"
                },
                {
                    "state": "Lakshadweep",
                    "price": 2050,
                    "unit": "₹/bag"
                },
                {
                    "state": "Puducherry",
                    "price": 1750,
                    "unit": "₹/bag"
                }
            ],
            "desc": "60% K2O",
            "nutrient": "60% K2O"
        },
        {
            "name": "Urea (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 300,
                    "unit": "₹/bag"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 400,
                    "unit": "₹/bag"
                },
                {
                    "state": "Assam",
                    "price": 350,
                    "unit": "₹/bag"
                },
                {
                    "state": "Bihar",
                    "price": 270,
                    "unit": "₹/bag"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 280,
                    "unit": "₹/bag"
                },
                {
                    "state": "Goa",
                    "price": 450,
                    "unit": "₹/bag"
                },
                {
                    "state": "Gujarat",
                    "price": 320,
                    "unit": "₹/bag"
                },
                {
                    "state": "Haryana",
                    "price": 300,
                    "unit": "₹/bag"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 380,
                    "unit": "₹/bag"
                },
                {
                    "state": "Jharkhand",
                    "price": 290,
                    "unit": "₹/bag"
                },
                {
                    "state": "Karnataka",
                    "price": 310,
                    "unit": "₹/bag"
                },
                {
                    "state": "Kerala",
                    "price": 470,
                    "unit": "₹/bag"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 270,
                    "unit": "₹/bag"
                },
                {
                    "state": "Maharashtra",
                    "price": 290,
                    "unit": "₹/bag"
                },
                {
                    "state": "Manipur",
                    "price": 350,
                    "unit": "₹/bag"
                },
                {
                    "state": "Meghalaya",
                    "price": 340,
                    "unit": "₹/bag"
                },
                {
                    "state": "Mizoram",
                    "price": 400,
                    "unit": "₹/bag"
                },
                {
                    "state": "Nagaland",
                    "price": 360,
                    "unit": "₹/bag"
                },
                {
                    "state": "Odisha",
                    "price": 280,
                    "unit": "₹/bag"
                },
                {
                    "state": "Punjab",
                    "price": 300,
                    "unit": "₹/bag"
                },
                {
                    "state": "Rajasthan",
                    "price": 300,
                    "unit": "₹/bag"
                },
                {
                    "state": "Sikkim",
                    "price": 420,
                    "unit": "₹/bag"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 330,
                    "unit": "₹/bag"
                },
                {
                    "state": "Telangana",
                    "price": 290,
                    "unit": "₹/bag"
                },
                {
                    "state": "Tripura",
                    "price": 350,
                    "unit": "₹/bag"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 300,
                    "unit": "₹/bag"
                },
                {
                    "state": "Uttarakhand",
                    "price": 350,
                    "unit": "₹/bag"
                },
                {
                    "state": "West Bengal",
                    "price": 330,
                    "unit": "₹/bag"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 500,
                    "unit": "₹/bag"
                },
                {
                    "state": "Chandigarh",
                    "price": 300,
                    "unit": "₹/bag"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 310,
                    "unit": "₹/bag"
                },
                {
                    "state": "Delhi",
                    "price": 350,
                    "unit": "₹/bag"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 380,
                    "unit": "₹/bag"
                },
                {
                    "state": "Ladakh",
                    "price": 450,
                    "unit": "₹/bag"
                },
                {
                    "state": "Lakshadweep",
                    "price": 550,
                    "unit": "₹/bag"
                },
                {
                    "state": "Puducherry",
                    "price": 330,
                    "unit": "₹/bag"
                }
            ],
            "desc": "46% N",
            "nutrient": "46% N"
        }
    ],
    "pesticides": [
        {
            "name": "Glyphosate Herbicide (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 600,
                    "unit": "₹/litre"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 700,
                    "unit": "₹/litre"
                },
                {
                    "state": "Assam",
                    "price": 650,
                    "unit": "₹/litre"
                },
                {
                    "state": "Bihar",
                    "price": 550,
                    "unit": "₹/litre"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 580,
                    "unit": "₹/litre"
                },
                {
                    "state": "Goa",
                    "price": 750,
                    "unit": "₹/litre"
                },
                {
                    "state": "Gujarat",
                    "price": 620,
                    "unit": "₹/litre"
                },
                {
                    "state": "Haryana",
                    "price": 600,
                    "unit": "₹/litre"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 680,
                    "unit": "₹/litre"
                },
                {
                    "state": "Jharkhand",
                    "price": 590,
                    "unit": "₹/litre"
                },
                {
                    "state": "Karnataka",
                    "price": 610,
                    "unit": "₹/litre"
                },
                {
                    "state": "Kerala",
                    "price": 770,
                    "unit": "₹/litre"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 560,
                    "unit": "₹/litre"
                },
                {
                    "state": "Maharashtra",
                    "price": 590,
                    "unit": "₹/litre"
                },
                {
                    "state": "Manipur",
                    "price": 650,
                    "unit": "₹/litre"
                },
                {
                    "state": "Meghalaya",
                    "price": 640,
                    "unit": "₹/litre"
                },
                {
                    "state": "Mizoram",
                    "price": 700,
                    "unit": "₹/litre"
                },
                {
                    "state": "Nagaland",
                    "price": 660,
                    "unit": "₹/litre"
                },
                {
                    "state": "Odisha",
                    "price": 580,
                    "unit": "₹/litre"
                },
                {
                    "state": "Punjab",
                    "price": 600,
                    "unit": "₹/litre"
                },
                {
                    "state": "Rajasthan",
                    "price": 600,
                    "unit": "₹/litre"
                },
                {
                    "state": "Sikkim",
                    "price": 720,
                    "unit": "₹/litre"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 630,
                    "unit": "₹/litre"
                },
                {
                    "state": "Telangana",
                    "price": 590,
                    "unit": "₹/litre"
                },
                {
                    "state": "Tripura",
                    "price": 650,
                    "unit": "₹/litre"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 600,
                    "unit": "₹/litre"
                },
                {
                    "state": "Uttarakhand",
                    "price": 650,
                    "unit": "₹/litre"
                },
                {
                    "state": "West Bengal",
                    "price": 630,
                    "unit": "₹/litre"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 800,
                    "unit": "₹/litre"
                },
                {
                    "state": "Chandigarh",
                    "price": 600,
                    "unit": "₹/litre"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 610,
                    "unit": "₹/litre"
                },
                {
                    "state": "Delhi",
                    "price": 650,
                    "unit": "₹/litre"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 680,
                    "unit": "₹/litre"
                },
                {
                    "state": "Ladakh",
                    "price": 750,
                    "unit": "₹/litre"
                },
                {
                    "state": "Lakshadweep",
                    "price": 850,
                    "unit": "₹/litre"
                },
                {
                    "state": "Puducherry",
                    "price": 630,
                    "unit": "₹/litre"
                }
            ],
            "desc": "Broad-Spectrum Herbicide",
            "type": "Broad-Spectrum Herbicide"
        },
        {
            "name": "Mancozeb Fungicide (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 400,
                    "unit": "₹/kg"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 500,
                    "unit": "₹/kg"
                },
                {
                    "state": "Assam",
                    "price": 450,
                    "unit": "₹/kg"
                },
                {
                    "state": "Bihar",
                    "price": 350,
                    "unit": "₹/kg"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 380,
                    "unit": "₹/kg"
                },
                {
                    "state": "Goa",
                    "price": 550,
                    "unit": "₹/kg"
                },
                {
                    "state": "Gujarat",
                    "price": 420,
                    "unit": "₹/kg"
                },
                {
                    "state": "Haryana",
                    "price": 400,
                    "unit": "₹/kg"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 480,
                    "unit": "₹/kg"
                },
                {
                    "state": "Jharkhand",
                    "price": 390,
                    "unit": "₹/kg"
                },
                {
                    "state": "Karnataka",
                    "price": 410,
                    "unit": "₹/kg"
                },
                {
                    "state": "Kerala",
                    "price": 570,
                    "unit": "₹/kg"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 360,
                    "unit": "₹/kg"
                },
                {
                    "state": "Maharashtra",
                    "price": 390,
                    "unit": "₹/kg"
                },
                {
                    "state": "Manipur",
                    "price": 450,
                    "unit": "₹/kg"
                },
                {
                    "state": "Meghalaya",
                    "price": 440,
                    "unit": "₹/kg"
                },
                {
                    "state": "Mizoram",
                    "price": 500,
                    "unit": "₹/kg"
                },
                {
                    "state": "Nagaland",
                    "price": 460,
                    "unit": "₹/kg"
                },
                {
                    "state": "Odisha",
                    "price": 380,
                    "unit": "₹/kg"
                },
                {
                    "state": "Punjab",
                    "price": 400,
                    "unit": "₹/kg"
                },
                {
                    "state": "Rajasthan",
                    "price": 400,
                    "unit": "₹/kg"
                },
                {
                    "state": "Sikkim",
                    "price": 520,
                    "unit": "₹/kg"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 430,
                    "unit": "₹/kg"
                },
                {
                    "state": "Telangana",
                    "price": 390,
                    "unit": "₹/kg"
                },
                {
                    "state": "Tripura",
                    "price": 450,
                    "unit": "₹/kg"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 400,
                    "unit": "₹/kg"
                },
                {
                    "state": "Uttarakhand",
                    "price": 450,
                    "unit": "₹/kg"
                },
                {
                    "state": "West Bengal",
                    "price": 430,
                    "unit": "₹/kg"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 600,
                    "unit": "₹/kg"
                },
                {
                    "state": "Chandigarh",
                    "price": 400,
                    "unit": "₹/kg"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 410,
                    "unit": "₹/kg"
                },
                {
                    "state": "Delhi",
                    "price": 450,
                    "unit": "₹/kg"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 480,
                    "unit": "₹/kg"
                },
                {
                    "state": "Ladakh",
                    "price": 550,
                    "unit": "₹/kg"
                },
                {
                    "state": "Lakshadweep",
                    "price": 650,
                    "unit": "₹/kg"
                },
                {
                    "state": "Puducherry",
                    "price": 430,
                    "unit": "₹/kg"
                }
            ],
            "desc": "Contact Fungicide",
            "type": "Contact Fungicide"
        }
    ],
    "equipment": [
        {
            "name": "Diesel Water Pump (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 18000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 19500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Assam",
                    "price": 18800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Bihar",
                    "price": 17500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 17800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Goa",
                    "price": 20000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Gujarat",
                    "price": 18500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Haryana",
                    "price": 18200,
                    "unit": "₹/unit"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 19200,
                    "unit": "₹/unit"
                },
                {
                    "state": "Jharkhand",
                    "price": 17900,
                    "unit": "₹/unit"
                },
                {
                    "state": "Karnataka",
                    "price": 18300,
                    "unit": "₹/unit"
                },
                {
                    "state": "Kerala",
                    "price": 20500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 17600,
                    "unit": "₹/unit"
                },
                {
                    "state": "Maharashtra",
                    "price": 17900,
                    "unit": "₹/unit"
                },
                {
                    "state": "Manipur",
                    "price": 18800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Meghalaya",
                    "price": 18700,
                    "unit": "₹/unit"
                },
                {
                    "state": "Mizoram",
                    "price": 19500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Nagaland",
                    "price": 19000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Odisha",
                    "price": 17800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Punjab",
                    "price": 18100,
                    "unit": "₹/unit"
                },
                {
                    "state": "Rajasthan",
                    "price": 18000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Sikkim",
                    "price": 19800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 18500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Telangana",
                    "price": 17900,
                    "unit": "₹/unit"
                },
                {
                    "state": "Tripura",
                    "price": 18800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 18000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Uttarakhand",
                    "price": 18800,
                    "unit": "₹/unit"
                },
                {
                    "state": "West Bengal",
                    "price": 18500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 21000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Chandigarh",
                    "price": 18100,
                    "unit": "₹/unit"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 18200,
                    "unit": "₹/unit"
                },
                {
                    "state": "Delhi",
                    "price": 18800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 19200,
                    "unit": "₹/unit"
                },
                {
                    "state": "Ladakh",
                    "price": 20500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Lakshadweep",
                    "price": 21500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Puducherry",
                    "price": 18500,
                    "unit": "₹/unit"
                }
            ],
            "desc": "5 HP|Heavy Duty",
            "capacity": "5 HP"
        },
        {
            "name": "Paddy Thresher (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 75000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 78000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Assam",
                    "price": 76000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Bihar",
                    "price": 73000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 74000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Goa",
                    "price": 80000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Gujarat",
                    "price": 75500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Haryana",
                    "price": 76500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 78500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Jharkhand",
                    "price": 74500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Karnataka",
                    "price": 75500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Kerala",
                    "price": 81000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 73500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Maharashtra",
                    "price": 74500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Manipur",
                    "price": 76000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Meghalaya",
                    "price": 75800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Mizoram",
                    "price": 78000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Nagaland",
                    "price": 77000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Odisha",
                    "price": 74000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Punjab",
                    "price": 76000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Rajasthan",
                    "price": 75000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Sikkim",
                    "price": 79000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 76500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Telangana",
                    "price": 75000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Tripura",
                    "price": 76000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 75500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Uttarakhand",
                    "price": 77000,
                    "unit": "₹/unit"
                },
                {
                    "state": "West Bengal",
                    "price": 76000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 82000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Chandigarh",
                    "price": 76000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 75000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Delhi",
                    "price": 77000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 78000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Ladakh",
                    "price": 80000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Lakshadweep",
                    "price": 81000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Puducherry",
                    "price": 76000,
                    "unit": "₹/unit"
                }
            ],
            "desc": "25 HP Tractor Driven",
            "capacity": "25 HP Tractor Driven"
        },
        {
            "name": "Sprayer Pump (Battery) (Example)",
            "prices": [
                {
                    "state": "Andhra Pradesh",
                    "price": 4000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Arunachal Pradesh",
                    "price": 4500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Assam",
                    "price": 4300,
                    "unit": "₹/unit"
                },
                {
                    "state": "Bihar",
                    "price": 3800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Chhattisgarh",
                    "price": 3900,
                    "unit": "₹/unit"
                },
                {
                    "state": "Goa",
                    "price": 5000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Gujarat",
                    "price": 4100,
                    "unit": "₹/unit"
                },
                {
                    "state": "Haryana",
                    "price": 4000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Himachal Pradesh",
                    "price": 4600,
                    "unit": "₹/unit"
                },
                {
                    "state": "Jharkhand",
                    "price": 3900,
                    "unit": "₹/unit"
                },
                {
                    "state": "Karnataka",
                    "price": 4100,
                    "unit": "₹/unit"
                },
                {
                    "state": "Kerala",
                    "price": 5200,
                    "unit": "₹/unit"
                },
                {
                    "state": "Madhya Pradesh",
                    "price": 3800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Maharashtra",
                    "price": 3900,
                    "unit": "₹/unit"
                },
                {
                    "state": "Manipur",
                    "price": 4300,
                    "unit": "₹/unit"
                },
                {
                    "state": "Meghalaya",
                    "price": 4200,
                    "unit": "₹/unit"
                },
                {
                    "state": "Mizoram",
                    "price": 4500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Nagaland",
                    "price": 4300,
                    "unit": "₹/unit"
                },
                {
                    "state": "Odisha",
                    "price": 3900,
                    "unit": "₹/unit"
                },
                {
                    "state": "Punjab",
                    "price": 4000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Rajasthan",
                    "price": 4000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Sikkim",
                    "price": 4600,
                    "unit": "₹/unit"
                },
                {
                    "state": "Tamil Nadu",
                    "price": 4100,
                    "unit": "₹/unit"
                },
                {
                    "state": "Telangana",
                    "price": 3800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Tripura",
                    "price": 4200,
                    "unit": "₹/unit"
                },
                {
                    "state": "Uttar Pradesh",
                    "price": 3700,
                    "unit": "₹/unit"
                },
                {
                    "state": "Uttarakhand",
                    "price": 4300,
                    "unit": "₹/unit"
                },
                {
                    "state": "West Bengal",
                    "price": 4000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Andaman and Nicobar Islands",
                    "price": 4800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Chandigarh",
                    "price": 3500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Dadra and Nagar Haveli and Daman and Diu",
                    "price": 3800,
                    "unit": "₹/unit"
                },
                {
                    "state": "Delhi",
                    "price": 4200,
                    "unit": "₹/unit"
                },
                {
                    "state": "Jammu and Kashmir",
                    "price": 4600,
                    "unit": "₹/unit"
                },
                {
                    "state": "Ladakh",
                    "price": 5000,
                    "unit": "₹/unit"
                },
                {
                    "state": "Lakshadweep",
                    "price": 5500,
                    "unit": "₹/unit"
                },
                {
                    "state": "Puducherry",
                    "price": 4000,
                    "unit": "₹/unit"
                }
            ],
            "desc": "16 Liter Tank|12V Battery",
            "capacity": "16 Liter Tank"
        }
    ]
};

    // --- Global Data Structures ---
    let allItems = []; // A flattened array of all items with their category
    let allStates = new Set();
    let allCategories = new Set();

    // --- Data Initialization ---
    function initializeData() {
        // Flatten the DB into a single array and populate filters
        for (const category in DB) {
            allCategories.add(category);
            DB[category].forEach(item => {
                // Add the category to the item object for easier filtering
                item.category = category;
                allItems.push(item);

                // Collect all states
                item.prices.forEach(p => allStates.add(p.state));
            });
        }

        // Populate Filters
        const categoryFilter = document.getElementById('categoryFilter');
        allCategories.forEach(c => categoryFilter.innerHTML += `<option value="${c}">${c.toUpperCase()}</option>`);

        const stateFilter = document.getElementById('stateFilter');
        Array.from(allStates).sort().forEach(s => stateFilter.innerHTML += `<option value="${s}">${s}</option>`);

        document.getElementById('totalItems').textContent = `${allItems.length} unique items listed across ${allStates.size} states.`;

        render();
    }

    // --- Rendering Functions ---
    function render() {
        const searchValue = document.getElementById('search').value.toLowerCase();
        const categoryValue = document.getElementById('categoryFilter').value;
        const stateValue = document.getElementById('stateFilter').value;
        const grid = document.getElementById('resultGrid');
        grid.innerHTML = '';

        // 1. Filter items based on search and category
        let filteredItems = allItems.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(searchValue);
            const categoryMatch = categoryValue ? item.category === categoryValue : true;
            return nameMatch && categoryMatch;
        });
        
        // 2. Further filter items if a specific state is selected
        if (stateValue) {
            filteredItems = filteredItems.filter(item => 
                item.prices.some(p => p.state === stateValue && p.price > 0)
            );
        }

        // 3. Render cards
        filteredItems.forEach(item => {
            let pricesForThisItem = item.prices.filter(p => p.price > 0);
            
            // If state is filtered, narrow down prices to only the selected state
            if (stateValue) {
                pricesForThisItem = pricesForThisItem.filter(p => p.state === stateValue);
            }
            
            if (pricesForThisItem.length === 0) return; // Skip item if no relevant price data

            const prices = pricesForThisItem.map(p => p.price);
            const units = Array.from(new Set(pricesForThisItem.map(p => p.unit)));
            const unit = units.length > 0 ? units[0] : '';

            const minPrice = Math.min(...prices);
            const maxPrice = Math.max(...prices);
            const avgPrice = prices.reduce((s, p) => s + p, 0) / prices.length;
            
            let priceDisplay = '';
            if (stateValue) {
                priceDisplay = `${unit.replace(/₹/, '₹ ')}<strong>${formatNumber(minPrice)}</strong> (in ${stateValue})`;
            } else {
                priceDisplay = `${unit.replace(/₹/, '₹ ')}<strong>${formatNumber(minPrice)} - ${formatNumber(maxPrice)}</strong> (Avg: ${formatNumber(Math.round(avgPrice))})`;
            }

            let descTags = [];
            // Dynamically add specific attribute based on category for the card chip
            if (item.variety) descTags.push(item.variety);
            if (item.type) descTags.push(item.type);
            if (item.nutrient) descTags.push(item.nutrient);
            if (item.capacity) descTags.push(item.capacity);
            
            let tagsHtml = `<span class="chip">${item.category.toUpperCase()}</span>`;
            if (descTags.length > 0) {
                tagsHtml += `<span class="chip">${descTags[0]}</span>`;
            }

            let html = `<div class="item-card" onclick="showComparison('${item.name.replace(/'/g, "\\'")}')">`;
            html += `<h4>${item.name}</h4>`;
            html += `<p>Price Range: ${priceDisplay}</p>`;
            html += tagsHtml;
            html += `</div>`;
            grid.innerHTML += html;
        });
    }

    // --- Comparison Function ---
    function showComparison(itemName) {
        const item = allItems.find(i => i.name === itemName);
        if (!item) return;

        // Filter data to only include prices for the selected item (price > 0)
        const prices = item.prices.filter(p => p.price > 0);
        
        document.getElementById('compareResult').innerHTML = ''; // Clear previous comparison

        if(!prices.length){ 
          document.getElementById('compareResult').innerHTML = '<div class="small">No state price data available for this item.</div>'; 
          return; 
        }
        
        // Sort prices to find high and low
        const sorted = prices.sort((a, b) => b.price - a.price);
        const high = sorted[0]; 
        const low = sorted[sorted.length - 1]; 
        const sum = prices.reduce((s,p)=>s+p.price,0);
        const avg = sum/prices.length;
        
        // Use the unit of the highest price for the average display
        const avgUnit = high.unit || ''; 

        let html = `<h4>${item.name} — State Comparison</h4>`;
        html += `<div class="small">States reporting: ${prices.length} &middot; **Highest**: ${high.state} ${high.unit||''} <strong>${formatNumber(high.price)}</strong> &middot; **Lowest**: ${low.state} ${low.unit||''} <strong>${formatNumber(low.price)}</strong> &middot; **Average**: ${avgUnit.replace(/₹/,'₹ ')} <strong>${formatNumber(Math.round(avg))}</strong></div>`;
        html += '<hr/>';
        html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">';
        
        // Display all state prices
        prices.sort((a, b) => a.state.localeCompare(b.state)).forEach(p => {
          html += `<div class="chip">${p.state}: ${p.unit||''}<strong>${formatNumber(p.price)}</strong></div>`;
        });
        
        html += '</div>';
        document.getElementById('compareResult').innerHTML = html;
    }

    // --- Init ---
    document.getElementById('search').addEventListener('input', render);
    document.getElementById('categoryFilter').addEventListener('change', render);
    document.getElementById('stateFilter').addEventListener('change', render);

    // Initial load
    initializeData();