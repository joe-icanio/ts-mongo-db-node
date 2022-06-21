import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  year: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

// Creating inteface type for the build functions parameters
interface IToDo {
  title: string;
  year: number;
  description: string;
}

interface ToDoDoc extends mongoose.Document {
  title: string;
  year: number;
  description: string;
}

// Creating build function interface with types
interface TodoModalInterface extends mongoose.Model<ToDoDoc> {
  build(attr: IToDo): ToDoDoc;
}

// Implementing build functions
todoSchema.statics.build = (attr: IToDo) => new ToDo(attr);

const ToDo = mongoose.model<ToDoDoc, TodoModalInterface>('ToDo', todoSchema);

export { ToDo };
