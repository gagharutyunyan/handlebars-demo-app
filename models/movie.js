const fs = require("fs");
const path = require("path");

class Movie {
  constructor(title, description, img) {
    this.title = title;
    this.description = description;
    this.img = img;
  }

  toJSON() {
    return {
      title: this.title,
      description: this.description,
      img: this.img
    };
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "data", "movies.json"),
        "utf-8",
        (err, content) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(content));
          }
        }
      );
    });
  }

  async save() {
    const movie = await Movie.getAll();
    movie.push(this.toJSON());
    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "data", "movies.json"),
        JSON.stringify(movie),
        err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }
}

module.exports = Movie;
