import type { FC } from "react";
import NextLink from "next/link";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CheckCircleOutlined as CheckCircleOutlinedIcon } from "../../icons/check-circle-outlined";
import { Users as UsersIcon } from "../../icons/users";
import { Star as StarIcon } from "../../icons/star";
import { Template as TemplateIcon } from "../../icons/template";

export const HomeHero: FC = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        pt: 6,
      }}
      {...props}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography color="primary" variant="overline">
          Introducing
        </Typography>
        <Typography align="center" variant="h1">
          Benvenuto nel backoffice di Ipermatch
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
          variant="subtitle1"
          sx={{ py: 3 }}
        >
          L'applicativo è in fase di sviluppo. Segnalaci qualsiasi modifica/bug
          dovessi riscontrare. Buon lavoro!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            mx: -1,
            mt: 2,
            mb: 6,
            "& > a": {
              m: 1,
            },
          }}
        >
          <NextLink href="/dashboard" passHref>
            <Button component="a" size="large" variant="contained">
              Accedi
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Box>
  );
};
