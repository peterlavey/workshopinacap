module.exports = app =>{
  app.get('/', (req, res)=> res.sendfile('./public/app/index.html'));
};
