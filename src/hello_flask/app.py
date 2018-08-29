from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
import sys
import json
import qrcode
from io import BytesIO
from flask import send_file

app = Flask(__name__)

# app.run(host='0.0.0.0', port=5389, debug=True)
CORS(app)
@app.route("/")
def index():
    return 'index page'
@app.route("/hello")
def hello():
    return "Hello World!"



@app.route('/qrcode',methods=['POST', 'GET'])
def v1_qrcode():
    box_size_arg = 'box_size'
    border_arg = 'border'
    box_size = request.args.get(box_size_arg, 10)
    border = request.args.get(border_arg, 1)
    url = request.args.get('url')

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=box_size,
        border=border,
    )
    if request.method == 'GET':
        data = {}
        if url:
            data = url
        else:
            for key, value in request.args.items():
                if key != border_arg and key != border_arg and key != url:
                    data[key] = value[0]
        qr.add_data(data)
    else:
        data = request.get_json()
        qr.add_data(data['value'])
    qr.make(fit=True)

    img = qr.make_image()
    img.save("snake_qrcode.png")
    return _serve_pil_image(img)


def _serve_pil_image(pil_img):
    img_io = BytesIO()
    pil_img.save(img_io, 'PNG')
    img_io.seek(0)
    return send_file(img_io, mimetype='image/png', cache_timeout=0)


@app.route('/connect',methods=['POST', 'GET'])
def connnect():
     error = None
     if request.method == 'POST':
         data = request.get_json()
         print(sys.path)
         return json.dumps([{'name':'cid','value':'你大爷的'},{'name':'cid','value':'123333232322'},{'name':'cid','value':'123333232322'},{'name':'cid','value':'123333232322'}],ensure_ascii=False)
    # else:
    #         error = 'Invalid username/password'
    # the code below is executed if the request method
    # was GET or the credentials were invalid
     return request.method 

     