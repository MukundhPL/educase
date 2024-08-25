import  {serial,varchar,float,mysqlTable} from 'drizzle-orm/mysql-core'


export const School = mysqlTable("School",{
    id:serial("id").primaryKey(),
    name:varchar("name",{length:500}).notNull(),
    address:varchar("address",{length:250}).notNull(),
    latitude:float("latitude").notNull(),
    longitude:float("longitude").notNull(),
})



