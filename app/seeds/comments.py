from app.models import db, Comment


def seed_comments():
    comments = [
        Comment(
            title='Lots Of Sun', content='I put mine on my windowsill where it gets a lot of sunlight and it is thriving!',
            userId=1, plantId=1
        ),
        Comment(
            title='Satisfying Colors', content='The evergreen leaves are calming and warm',
            userId=2, plantId=1
        )
    ]

    for comment in comments:
        db.session.add(comment)
    
    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()