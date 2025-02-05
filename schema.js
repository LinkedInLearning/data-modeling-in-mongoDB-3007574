// Define the schema for Courses
db.createCollection("courses", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "description", "modules"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name of the course"
        },
        description: {
          bsonType: "string",
          description: "Description of the course"
        },
        modules: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["name", "description", "lessons"],
            properties: {
              name: {
                bsonType: "string",
                description: "Name of the module"
              },
              description: {
                bsonType: "string",
                description: "Description of the module"
              },
              lessons: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                  required: ["name", "description", "assignments"],
                  properties: {
                    name: {
                      bsonType: "string",
                      description: "Name of the lesson"
                    },
                    description: {
                      bsonType: "string",
                      description: "Description of the lesson"
                    },
                    assignments: {
                      bsonType: "array",
                      items: {
                        bsonType: "object",
                        required: ["name", "description", "grade"],
                        properties: {
                          name: {
                            bsonType: "string",
                            description: "Name of the assignment"
                          },
                          description: {
                            bsonType: "string",
                            description: "Description of the assignment"
                          },
                          grade: {
                            bsonType: "number",
                            description: "Grade of the assignment"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

// Define the schema for Students
db.createCollection("students", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "phone", "address", "enrolledCourses"],
      properties: {
        name: { bsonType: "string", description: "Name of the student" },
        email: { bsonType: "string", description: "Email of the student" },
        phone: { bsonType: "string", description: "Phone number of the student" },
        address: { bsonType: "string", description: "Address of the student" },
        enrolledCourses: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["courseId", "progress", "paymentStatus"],
            properties: {
              courseId: { bsonType: "objectId", description: "Course ID" },
              progress: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                  required: ["moduleId", "completedLessons"],
                  properties: {
                    moduleId: { bsonType: "objectId", description: "Module ID" },
                    completedLessons: {
                      bsonType: "array",
                      items: { bsonType: "objectId", description: "Completed Lesson ID" }
                    }
                  }
                }
              },
              paymentStatus: { bsonType: "string", description: "Payment status" }
            }
          }
        }
      }
    }
  }
});

// Define the schema for Instructors
db.createCollection("instructors", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "phone", "address", "assignedCourses"],
      properties: {
        name: { bsonType: "string", description: "Name of the instructor" },
        email: { bsonType: "string", description: "Email of the instructor" },
        phone: { bsonType: "string", description: "Phone number of the instructor" },
        address: { bsonType: "string", description: "Address of the instructor" },
        assignedCourses: {
          bsonType: "array",
          items: { bsonType: "objectId", description: "Assigned Course ID" }
        }
      }
    }
  }
});

print("Data model for the online school business has been created successfully.");