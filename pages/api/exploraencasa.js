
export default async function handler(req, res, ) {

  try {
    fetch('https://encasa.parqueexplora.org/wp-json/wp/v2/posts')
    .then(data => data.json())
    .then(el => el.map((exp) => {
      return{
        id: exp.id,
        url: exp.link,
        imagen: exp.yoast_head_json.og_image[0].url,
        titulo: exp.title.rendered,
        fecha: exp.date,
        tipo: exp.type,
        descripcion: exp.excerpt.rendered
      }}))
    .then(response => {res.status(200).json(response)})
    .catch(err => console.log(err));

   
  }catch(err){
    console.log(err)
  }
}
