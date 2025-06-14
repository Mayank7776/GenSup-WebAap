const allProductData = [
  {
    name: "Dymatize Whey Protein",
    image: "https://dummyimage.com/600x400/000/fff&text=Dymatize+Whey+Protein",
    originalPrice: 3145,
    newPrice: 2800,
    category: "protein"
  },
  {
    name: "Rule1 Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=Rule1+Glutamine",
    originalPrice: 4761,
    newPrice: 4047,
    category: "vitamin"
  },
  {
    name: "Rule1 Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=Rule1+Glutamine",
    originalPrice: 3608,
    newPrice: 3031,
    category: "vitamin"
  },
  {
    name: "GNC Creatine",
    image: "https://dummyimage.com/600x400/000/fff&text=GNC+Creatine",
    originalPrice: 2656,
    newPrice: 1913,
    category: "vitamin"
  },
  {
    name: "BSN Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=BSN+Glutamine",
    originalPrice: 4600,
    newPrice: 3266,
    category: "vitamin"
  },
  {
    name: "BSN Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=BSN+Glutamine",
    originalPrice: 4159,
    newPrice: 3702,
    category: "vitamin"
  },
  {
    name: "MyProtein Whey Protein",
    image: "https://dummyimage.com/600x400/000/fff&text=MyProtein+Whey+Protein",
    originalPrice: 4327,
    newPrice: 3505,
    category: "protein"
  },
  {
    name: "Labrada Mass Gainer",
    image: "https://dummyimage.com/600x400/000/fff&text=Labrada+Mass+Gainer",
    originalPrice: 4430,
    newPrice: 3677,
    category: "vitamin"
  },
  {
    name: "MuscleBlaze Whey Protein",
    image: "https://dummyimage.com/600x400/000/fff&text=MuscleBlaze+Whey+Protein",
    originalPrice: 4451,
    newPrice: 3695,
    category: "protein"
  },
  {
    name: "Optimum Nutrition Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=Optimum+Nutrition+Glutamine",
    originalPrice: 3546,
    newPrice: 2979,
    category: "vitamin"
  },
  {
    name: "MuscleBlaze Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=MuscleBlaze+Glutamine",
    originalPrice: 4022,
    newPrice: 3057,
    category: "vitamin"
  },
  {
    name: "BSN Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=BSN+Glutamine",
    originalPrice: 2839,
    newPrice: 1988,
    category: "vitamin"
  },
  {
    name: "Dymatize Whey Protein",
    image: "https://dummyimage.com/600x400/000/fff&text=Dymatize+Whey+Protein",
    originalPrice: 2484,
    newPrice: 2087,
    category: "protein"
  },
  {
    name: "Optimum Nutrition Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=Optimum+Nutrition+Glutamine",
    originalPrice: 2458,
    newPrice: 2090,
    category: "vitamin"
  },
  {
    name: "Nordic Naturals Omega 3",
    image: "https://dummyimage.com/600x400/000/fff&text=Nordic+Naturals+Omega+3",
    originalPrice: 3308,
    newPrice: 2548,
    category: "vitamin"
  },
  {
    name: "Scivation Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=Scivation+Glutamine",
    originalPrice: 4640,
    newPrice: 3573,
    category: "vitamin"
  },
  {
    name: "Optimum Nutrition Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=Optimum+Nutrition+Glutamine",
    originalPrice: 2673,
    newPrice: 2166,
    category: "vitamin"
  },
  {
    name: "GNC Creatine",
    image: "https://dummyimage.com/600x400/000/fff&text=GNC+Creatine",
    originalPrice: 3469,
    newPrice: 3053,
    category: "vitamin"
  },
  {
    name: "MyProtein Mass Gainer",
    image: "https://dummyimage.com/600x400/000/fff&text=MyProtein+Mass+Gainer",
    originalPrice: 2095,
    newPrice: 1488,
    category: "vitamin"
  },
  {
    name: "Nordic Naturals Omega 3",
    image: "https://dummyimage.com/600x400/000/fff&text=Nordic+Naturals+Omega+3",
    originalPrice: 2710,
    newPrice: 2358,
    category: "vitamin"
  },
  {
    name: "Optimum Nutrition Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=Optimum+Nutrition+Glutamine",
    originalPrice: 3140,
    newPrice: 2481,
    category: "vitamin"
  },
  {
    name: "MuscleBlaze Whey Protein",
    image: "https://dummyimage.com/600x400/000/fff&text=MuscleBlaze+Whey+Protein",
    originalPrice: 2441,
    newPrice: 1831,
    category: "protein"
  },
  {
    name: "MuscleBlaze Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=MuscleBlaze+Glutamine",
    originalPrice: 2482,
    newPrice: 2110,
    category: "vitamin"
  },
  {
    name: "Dymatize Mass Gainer",
    image: "https://dummyimage.com/600x400/000/fff&text=Dymatize+Mass+Gainer",
    originalPrice: 4531,
    newPrice: 3308,
    category: "vitamin"
  },
  {
    name: "MuscleBlaze BCAA",
    image: "https://dummyimage.com/600x400/000/fff&text=MuscleBlaze+BCAA",
    originalPrice: 3598,
    newPrice: 3203,
    category: "vitamin"
  },
  {
    name: "Dymatize BCAA",
    image: "https://dummyimage.com/600x400/000/fff&text=Dymatize+BCAA",
    originalPrice: 3346,
    newPrice: 2610,
    category: "vitamin"
  },
  {
    name: "GNC Omega 3",
    image: "https://dummyimage.com/600x400/000/fff&text=GNC+Omega+3",
    originalPrice: 2929,
    newPrice: 2109,
    category: "vitamin"
  },
  {
    name: "MuscleTech Creatine",
    image: "https://dummyimage.com/600x400/000/fff&text=MuscleTech+Creatine",
    originalPrice: 2158,
    newPrice: 1748,
    category: "vitamin"
  },
  {
    name: "Dymatize Whey Protein",
    image: "https://dummyimage.com/600x400/000/fff&text=Dymatize+Whey+Protein",
    originalPrice: 3166,
    newPrice: 2438,
    category: "protein"
  },
  {
    name: "Universal Nutrition Creatine",
    image: "https://dummyimage.com/600x400/000/fff&text=Universal+Nutrition+Creatine",
    originalPrice: 3461,
    newPrice: 2804,
    category: "vitamin"
  },
  {
    name: "Rule1 Glutamine",
    image: "https://dummyimage.com/600x400/000/fff&text=Rule1+Glutamine",
    originalPrice: 2699,
    newPrice: 2160,
    category: "vitamin"
  },
  {
    name: "Dymatize Whey Protein",
    image: "https://dummyimage.com/600x400/000/fff&text=Dymatize+Whey+Protein",
    originalPrice: 3607,
    newPrice: 3139,
    category: "protein"
  },
  {
    name: "Dymatize Mass Gainer",
    image: "https://dummyimage.com/600x400/000/fff&text=Dymatize+Mass+Gainer",
    originalPrice: 3358,
    newPrice: 2653,
    category: "vitamin"
  },
  {
    name: "ON Whey Protein",
    image: "https://dummyimage.com/600x400/000/fff&text=ON+Whey+Protein",
    originalPrice: 2505,
    newPrice: 2230,
    category: "protein"
  },
  {
    name: "NitroTech Whey Protein",
    image: "https://dummyimage.com/600x400/000/fff&text=NitroTech+Whey+Protein",
    originalPrice: 3909,
    newPrice: 3010,
    category: "protein"
  }
]

export default allProductData;
