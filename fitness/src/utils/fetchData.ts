import axios from 'axios';

type apiOptionsType = {
    headers: {
        'X-RapidAPI-Key': string,
        'X-RapidAPI-Host': string
    }
};

export const exerciseOptions = {
    headers: {
      'X-RapidAPI-Key': 'd0853c564fmsh8203a932eeab1a2p1e3d5ejsne6c5e4895657',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url:string, options: apiOptionsType) => {
    const { data } = await axios.get(url, exerciseOptions);
    
};



// 'https://exercisedb.p.rapidapi.com'