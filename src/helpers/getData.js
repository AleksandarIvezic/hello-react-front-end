const getData = async () => {
  const request = await fetch('http://localhost:3000/api/v1/greeting');
  const response = await request.json();
  const data = await response.greeting;
  return data;
};

export default getData;
