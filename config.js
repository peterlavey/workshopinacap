module.exports = (app, Express, bodyParser)=>{
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  console.info('Recursos estaticos: '+__dirname+ '/public/app');
  app.use(Express.static(__dirname + '/public/app'));
};
