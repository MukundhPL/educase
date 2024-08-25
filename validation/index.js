
import { object, string, number} from 'yup'

const SchoolDetailsSchema = object({
    name: string().required("Name is required").max(50,"Length of name is too large"),
    address: string().required("Address is required").max(500,"Length of address is too large"),

})

export const LatitudeSchema = object({
    latitude: number("Latitude must be a number").required("Latitude is required").min(-90,"Invalid Latitude").max(90,"Invalid Latitude")
})

export const LongitudeSchema = object({
    longitude: number("Longitude must be a number").required("Longitude is required").min(-180,"Invalid Longitude").max(180,"Invalid Longitude")
})

export const SchoolSchema = SchoolDetailsSchema.concat(LatitudeSchema).concat(LongitudeSchema)