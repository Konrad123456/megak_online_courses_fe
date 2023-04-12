import Typography from '@mui/material/Typography';
import {Button, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import CourseDefault from '../../../assets/imgs/courseDefault.jpg';
import {Course} from "../types/types";
import React from "react";
import {urlConfig} from "../../../config/url.config";
import {useNavigate} from "react-router";
import {useDeleteCourseMutation} from "../../../app/api/coursesApiSlice";

interface CourseCardProps {
    course: Course;
    onDelete?: (id: string) => void;
    edit?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({course, edit= false, onDelete}) => {
    const navigate = useNavigate();
    const [deleteCourse] = useDeleteCourseMutation();

    const courseImg = () => {
        return course.imgUrl ?
            `${urlConfig.baseUrl}/uploads/courses/${course.id}/img`:
            CourseDefault
    }

    const clickHandler = () => {
        navigate(`/courses/${course.id}`);
    }

    const clickEditHandler = () => {
        navigate(`/courses/${course.id}/edit`);
    }

    const deleteClickHandler = async () => {
        const isDeleted = await deleteCourse({id: course.id}).unwrap();
        if(isDeleted && onDelete) {
            onDelete(course.id);
        }
    }

    return (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    style={{height: 140}}
                    src={courseImg()}
                    title={`Course ${course.title}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {course.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {!edit && <Button size="small" onClick={clickHandler}>Learn More</Button>}
                    {edit && <Button size="small" onClick={clickEditHandler}>Edit</Button>}
                    {edit && <Button size="small" onClick={deleteClickHandler}>Delete</Button>}
                </CardActions>
            </Card>
        );
}