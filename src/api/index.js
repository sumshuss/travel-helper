import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary'



export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
        headers: {
          'X-RapidAPI-Key': '3de0d5ce90msh76bf096912cd45ep188ec0jsneb16f83911f7',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });

    return data

} catch (error) {
    console.log(error)
}

}
