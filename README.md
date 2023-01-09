# NodeJS
* Libary Morgan
dung de logger http requset


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