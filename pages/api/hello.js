// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default async function handler(req, res, ) {

  try {
    fetch('https://encasa.parqueexplora.org/wp-json/wp/v2/posts')
    .then(data => data.json())
    .then(el => {return{id: el.id}})
    .then(response => {res.status(200).json(response)})
    .catch(err => console.log(err));

   
  }catch(err){
    console.log(err)
  }
}
