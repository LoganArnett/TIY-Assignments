## User Story 

[Basic Format:

_______  can do _________  
(someone) ---   (something)

so that __________________  
     ---------  (some benefit)
]

### EPIC: I can create a list of todos so that...
  * I can keep track of what I need to do next
  * I can track what I have already done
  * I can track important due dates
  * I can manage my time better
  * ETC.  
  
----

#### I can _mark a task as completed_ so that I can _track what has been done_.

  * Click a button to mark it complete. What does this look like? Checkmark? Checkbox?
  * Can I change my mind and mark it as incomplete again?
  * Strikethrough on text? Mute the color? 
  
  
----

#### I can _add a task to the list_ so that I can _be reminded to do it_.
----

#### I can _view a list of incomplete tasks_ so that I can _focus on what I need to do next_.
----

#### I can _remove tasks from the list_ so that I can _keep my list clean_.

  * Click a button on each item to remove it; confirm first?
  * Can I get the item back? Trash or GONE?
  * Can I remove more than one item at a time? All completed items?
  
----

#### I can _edit/change tasks in the list_ so that I can _fix typos and be more specific about the task_.

----

## All About MVC: Model View Controller

### Model: Nouns
  * List of Tasks: Collection
    * Properties:
    * Methods:
      * CRUD
      * Add a Task
      * Remove a Task
      * Change order of Tasks?
  * Task
    * Properties 
      * Text Description
      * Completion Status: Done or Not?
      * Parent Task
      * Due Dates
      * Color/Category?
    * Create
    * Mark Complete
    * Edit Text
    * Remove/Delete
    * Archive?
 
### Controllers: Traffic Cop
  * Workflows:
    * Edit a specific __Task__:
      * Get a spcecific __Task__ from the __List of Tasks__
      * Edit the __Task__(should save the changes)
      * Display the view of the __List of Tasks__
    * Add a new __Task__: 
      * Accept input: Text
      * Creats a new __Task__
      * Add the new __Task__ to the __List of Tasks__
      * Display the view of the __List of Tasks__
  
### View: Display Items
  * Display the List of Tasks
    * Filter By:
    * All Tasks
    * Only Completed Tasks
    * Only Uncompleted Tasks
  * Individual Task
    * Incomplete
    * Complete
    * Marked for Deletion
    * Overdue Tasks
  * Add a Task
  * Edit a Task
  * 




A page with HTML and CSS = __View__  
When an event is triggered it is sent to the = __Controller__  
Which then communicates with the = __Model__
