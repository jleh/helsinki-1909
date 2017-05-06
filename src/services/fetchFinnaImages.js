export default function fetchFinnaImages(search) {
  const url = `https://api.finna.fi/api/v1/search?lookfor=${search} helsinki&type=AllFields&filter[]=~main_date_str%3A1909&filter[]=~main_date_str%3A1908&filter[]=~main_date_str%3A1907&filter[]=~main_date_str%3A1906&filter[]=~main_date_str%3A1905&filter[]=~main_date_str%3A1910&filter[]=~main_date_str%3A1911&filter[]=~main_date_str%3A1912&filter[]=~main_date_str%3A1913&filter[]=~main_date_str%3A1914&filter[]=~main_date_str%3A1915&sort=relevance%2Cid%20asc&page=1&limit=20&prettyPrint=false&lng=fi`;

  return fetch(url).then(res => res.json());
}
