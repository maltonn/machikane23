from flask import Flask
app = Flask(__name__)
import random

# http://127.0.0.1:5000をルートとして、("")の中でアクセスポイント指定
# @app.route("hoge")などで指定すると、http://127.0.0.1:5000/hogeでの動作を記述できる。
@app.route("/")
def hello():
    print(random.randint(1, 100))
    return "Hello World!"

if __name__ == "__main__":
    # webサーバー立ち上げ
    app.run()