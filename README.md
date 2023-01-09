# NodeJS
* Libary Morgan
dung de logger http request


## template Engines (Handlebar)

- change external name

app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));

- call partials 
 Support a directory of partials; e.g., {{> foo/bar}} which exists on the file system at views/partials/foo/bar.handlebars, by default.


## Static file & scss
 img: app.use(express.static(path.join(__dirname, 'public')));
 scss: 
create script in package.json
    install node-sass node-sass [options] <input> [output]

    npm run watch

-- khi luu file app.scss sẽ được generate ra file app.css

nếu import file khác vào file scss thì thay đổi lưu sẽ không được watch ra luôn
  -- sửa như sau:
  sua đường dẫn tới thư mục cha trong package.json và thêm --output trước lệnh file css

  thêm file nodemon.json

  ## Basic routing
   URL mà tồn tại duy nhất ta có thể gọi nó là URI
   - Định tuyến 

   .render thường liên quan đến những thứ là trả về cái gì

   load lần đầu thì nó sẽ trả về status code là 200, từ lần load thứ 2 trở đi nó không thấy có sự thay đổi nó sẽ trả về status code là 304 Not modified


   ## query parameters
    thường sử dụng với get method nhất
    param: ?q=f8&author=ngochv (đầu tiên là dấu hỏi chấm phần đằng sau là thêm dấu &)

    thằng req nó trả về một object để lấy param URL (console.log(req.query.q);)

  ## Form default behavior
    - Hành vi mặc định cua form, khi ấn submit form nó sẽ đính tất cả những thẻ input có name lên query parameter
truyền lên URL parameter.

  - form mặc định là phương thức get
  nếu muốn thay đổi phương thức, dùng attr method trong thẻ form method="POST"