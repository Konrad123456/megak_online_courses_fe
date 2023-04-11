import { z } from "zod";

export const addCourseSchema = z.object({
    description: z.string().min(3).max(1000),
    slug: z.string().min(1).max(100),
    title: z.string().min(1).max(100),
    categoriesIds: z.array(z.string()).nonempty(),
});