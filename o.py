import os
import pymysql
import json

host = os.environ['RDS_HOST_NAME']
user = os.environ['USER']
password = os.environ['PASS']
db = os.environ['DB']

connection = pymysql.connect(host=host, user=user, password=password)

def lambda_handler(event, context):
    params=event["queryStringParameters"]
    print(params)
    uid=params["uid"]
    body=params["body"]

    body=json.loads(body)
    for q in body:
        print(q["id"],q["answer"],type(q["answer"]))

        user_id=uid
        question_id=q["id"]
        if type(q["answer"])==list:
            for answer in q["answer"]:
                with connection.cursor() as cursors:
                    cursors.execute(f"INSERT INTO machikane.Questionnaire (User_ID, Question_ID, Answer) VALUES ('{user_id}', '{question_id}', '{answer}');")
        else:
            answer=q["answer"]
            with connection.cursor() as cursors:
                cursors.execute(f"INSERT INTO machikane.Questionnaire (User_ID, Question_ID, Answer) VALUES ('{user_id}', '{question_id}', '{answer}');")

    connection.commit()
        
    return {
         'statusCode': 200,
         'body': "success"
     }