Redis Installation

1) For Windows
	- Enable WSL from "Turn Windows features on or off settings"
	- Restart the machine
	- Install Ubuntu20.04 from Windows Store
	- Open Ubuntu and setup name and password
	- Run the following commands:
		> sudo apt-get update <br>
		> sudo apt-get upgrade <br>
		> sudo apt-get install redis-server <br>
		> sudo service redis-server restart <br>
		> redis-cli <br>

2) For Linux
	- Run the commands:
		> sudo apt-get install redis-server <br>
		> sudo service redis-server restart <br>
		> redis-cli <br>

-----------------------------------------------------------------------

USAGE

- SET key value
- GET key
- ttl key
- KEYS *
- DEL key
- FLUSHALL
- EXISTS key
- expire key time  
- setex key time value

<!-- OTP: "jhdsuahdfdfna213342" -->
	

For Arrays

- LPUSH array value
- RPUSH array value
- LRANGE array start stop
- LPOP array
- RPOP array



For Sets

- SADD myset value 
- SMEMBERS myset


For Object/Hash

- HSET key field value 
- HGET key field
- HGETALL key
- HDEL key field
- HEXISTS key field

Also check this link:
https://redis.com/blog/redis-on-windows-10/

