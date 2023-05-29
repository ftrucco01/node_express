const User = require('./user.model');

/**
 * Service responsible for user operations.
 * @class
 */
class UserService {
  /**
   * Create a new user.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  async createUser(req, res) {
    const { name, age } = req.body;

    try {
      const user = new User({ name, age });
      await user.save();
      console.log('User created successfully');
      res.status(200).send('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).send('Error creating user');
    }
  }

  /**
   * Update an existing user.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  async updateUser(req, res) {
    const { id } = req.params;
    const { name, age } = req.body;

    try {
      const user = await User.findByIdAndUpdate(id, { name, age }, { new: true });
      if (!user) {
        console.log('User not found');
        return res.status(404).send('User not found');
      }

      console.log('User updated successfully');
      res.status(200).send('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).send('Error updating user');
    }
  }

  /**
   * Delete a user.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
    async deleteUser(req, res) {
        try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        console.log('User deleted successfully');
        res.status(200).send('User deleted successfully');
        } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Error deleting user');
        }
    }

  /**
   * Get a user by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
    async getUser(req, res) {
        try {
          const userId = req.params.id;
          const user = await User.findById(userId);
          if (!user) {
            res.status(404).send('User not found');
            return;
          }
          console.log('User retrieved successfully');
          res.status(200).json(user);
        } catch (error) {
          console.error('Error retrieving user:', error);
          res.status(500).send('Error retrieving user');
        }
    }

  /**
   * Get all users.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {Promise<void>}
   */
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      console.log('Users retrieved successfully');
      res.status(200).json(users);
    } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).send('Error retrieving users');
    }
  }
}

module.exports = UserService;