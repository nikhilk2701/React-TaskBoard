import { Button, Card, Grid2, Typography } from "@mui/material";

export default function NotesList({ notes }) {
  return (
    <Grid2 container spacing={2} justifyContent="center" alignItems="center">
      {notes.map((item) => (
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          key={item.id}
        >
          <Card sx={{ padding: 1 }}>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 25 }}
            >
              {item.title}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              {item.description}
            </Typography>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}
