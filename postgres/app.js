const sequelize = require( 'sequelize' )
const db = new sequelize( 'thedemo', 'mentor', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
} )

const Bottle = db.define( 'bottle', {
	size: sequelize.INTEGER,
	color: sequelize.STRING,
	weight: sequelize.INTEGER
} )

const User = db.define( 'user', {
	name: sequelize.STRING,
	email: sequelize.STRING
} )

Bottle.belongsTo( User )
User.hasMany( Bottle )

db.sync( { force: true } ).then( f => {
	// Make a Promise all array that starts making bottles at the same time ( so not in order )
	return Promise.all( [
		Bottle.create( {
			size: 4,
			color: 'green',
			weight: 42
		} ),
		Bottle.create( {
			size: 14,
			color: 'blue',
			weight: 412
		} ),
		Bottle.create( {
			size: 8,
			color: 'purple',
			weight: 42
		} ),
		Bottle.create( {
			size: 4,
			color: 'magenta',
			weight: 452
		} ),
		Bottle.create( {
			size: 40,
			color: 'yellow',
			weight: 492
		} )
	] )
} ).then( bottles => {
	// bottles contains an array of the results of the above Promise.all
	console.log( bottles )
	// This user promise is returned to the next .then
	return User.create( {
		name: "Mentor",
		email: "mentor@palokaj.co"
	} )
} ).then( user => {
	// We here use the resulting user to create a bottle on their behalf
	return user.createBottle( {
		size: 42,
		color: 'obsidian',
		weight: 9999
	} )
} ).then( bottle => {
	// Find one user besed on a 'where' parameter
	return User.findOne( {
		where: {
			email: "mentor@palokaj.co"
		},
		// We here ask pg to include the Bottle model ( variable, not the db model ) that belong to this user
		include: [ Bottle ]
	} )
} ).then( founduser => {
	console.log( founduser.get( {plain: true} ) )
} ).catch( console.log.bind( console ) )