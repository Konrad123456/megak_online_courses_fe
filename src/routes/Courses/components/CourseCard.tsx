import Typography from '@mui/material/Typography';
import {Button, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import CourseDefault from '../../../assets/imgs/courseDefault.jpg';
import {Course} from "../types/types";
import React from "react";
import {urlConfig} from "../../../config/url.config";
import {useNavigate} from "react-router";

interface CourseCardProps {
    course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({course}) => {
    const navigate = useNavigate();

    const courseImg = () => {
        return course.imgUrl ?
            `${urlConfig.baseUrl}/uploads/courses/${course.id}/img`:
            CourseDefault
    }

    const clickHandler = () => {
        navigate(`/courses/${course.id}`);
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
                    <Button size="small" onClick={clickHandler}>Learn More</Button>
                </CardActions>
            </Card>
        );
}