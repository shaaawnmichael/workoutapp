export interface Exercises {
  eid: number
  body_part: string;
  equipment: string;
  gif_url: string;
  exercise_name: string;
  exercise_target: string;
  input: string;


}

export interface Exercise {
  id: number
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;
  input: string;

}

export interface ExerciseAdd {
	id?: number
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;

}

export interface Message{
  message: string
}

export interface ContactUs {
  email: string;
  subject: string;
  enquiry: string;
}

export interface newUser{
  username: string
  password: string
}

export interface User{
  username: string
  password: string
}

export interface Profile extends Exercise{
  username: string
  id: number
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;

}

export interface selectedExercise{
  username: string
  name: string;
}

export interface MyProfile {
  username: string
  exercise_name: string
}
