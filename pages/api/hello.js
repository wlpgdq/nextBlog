// req = request data, res = response data
// req是http.IncomingMessage的实例，还有一些您可以在此处看到的预建中间件。
// res是http.ServerResponse的实例，以及一些可以在此处看到的帮助器功能。
export default (req, res) => {
    const email = req.body.email
    // Then save email to your database, etc...

    // 返回数据
    res.status(200).json({
        text: 'Hello'
    })
}