Table users {
 userID int[pk]
 fname varchar
 lname varchar
 userEmail varchar
 password password
 profilePicPath varchar
}

table events {
  eventID int [pk]
  eventTitle varchar
  eventDate date
  eventTime datetime
  eventLocation varchar
}

table friends {
  fkUserID int
  friendID int
}

table userPhotos {
  userPhotoID int [pk]
  fkUserID int
  photoPath varchar
}

table userEvents {
  fkUserID int
  fkEventID int
}

"<" = one-to-many

Ref: "users"."userID" < "friends"."fkUserID"
Ref: "users"."userID" < "userPhotos"."fkUserID"
Ref: "users"."userID" < "userEvents"."fkUserID"
Ref: "events"."eventID" < "userEvents"."fkEventID"