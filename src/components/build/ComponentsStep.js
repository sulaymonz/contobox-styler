import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Photo from "@mui/icons-material/Photo";
import PlayCircle from "@mui/icons-material/PlayCircle";
import Room from "@mui/icons-material/Room";
import Edit from "@mui/icons-material/Edit";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import * as styles from "./Build.module.scss";
import mobileImg from "../../images/mobile.png";
import { useSelector, useDispatch } from "react-redux";
import * as buildActions from "../../redux/actions/buildActions";
import ComponentChip from "./ComponentChip";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const ComponentsStep = () => {
  const components = useSelector((state) => state.build.components);
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newComponents = reorder(
      components,
      result.source.index,
      result.destination.index
    );

    dispatch(buildActions.reorderComponentStack(newComponents));
  };

  const handleDelete = (id) => {
    dispatch(buildActions.deleteComponentFromStack(id));
  };

  const handleClickNext = () => {
    dispatch(buildActions.nextBuildStep());
  };

  return (
    <Container className={styles.frame} maxWidth="md">
      <Typography variant="h4">Pick your Component Stack</Typography>
      <Grid container spacing={2} className={styles.componentGrid}>
        <Grid item xs={3}>
          <Stack className={styles.componentList} spacing={2}>
            <ComponentChip
              avatar={<Photo />}
              label="Photo Gallery"
              variant="outlined"
            />
            <ComponentChip
              avatar={<PlayCircle />}
              label="Video Gallery"
              variant="outlined"
            />
            <ComponentChip
              avatar={<Edit />}
              label="Custom"
              variant="outlined"
            />
            <ComponentChip
              avatar={<Room />}
              label="Store Locator"
              variant="outlined"
            />
            <ComponentChip
              avatar={<ShoppingCart />}
              label="Shoppable"
              variant="outlined"
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable-1" type="PERSON">
              {(provided, snapshot) => (
                <Stack
                  spacing={2}
                  className={styles.componentStack}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {components.map((item, index) => (
                    <Draggable
                      draggableId={item.id}
                      index={index}
                      key={item.id}
                    >
                      {(provided, snapshot) => (
                        <Chip
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={index}
                          className={styles.componentPaper}
                          label={item.content}
                          variant="outlined"
                          onDelete={() => handleDelete(item.content)}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Stack>
              )}
            </Droppable>
          </DragDropContext>
          <Grid container className={styles.footer}>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <Typography variant="body2" className={styles.footnote}>
                Drag and drop to reorder
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button variant="text" onClick={handleClickNext}>
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img
            className={styles.componentPreview}
            src={mobileImg}
            width="100%"
            alt="Mobile - A"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ComponentsStep;
