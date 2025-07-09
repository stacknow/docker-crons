import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(`[${new Date().toISOString()}] Web server received a request on '/'`);
  res.status(200).json({
    message: 'Hello from the sample web service!',
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] Dummy web server started and listening on port ${PORT}`);
});
