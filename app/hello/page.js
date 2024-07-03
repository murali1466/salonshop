"use client";
import React, { useRef,useState,useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Box,
  Autocomplete,
  Grid,
  Checkbox,
  Divider
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ReactToPrint from "react-to-print";


function generateUniqueKey() {
return Math.random().toString(36).substr(2, 9); // Generate a random string
}
  
const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  age: Yup.number().required("Age is required") // Ensure age is present
    .integer("Age must be an integer") // Ensure age is an integer
    .min(0, "Age must be at least 0") // Minimum age allowed
    .max(100, "Age must be at most 100"), // Maximum age allowed
  gender: Yup.string().required("Gender is Required"),
  cheifComplaint: Yup.boolean().required("Required"),
  pdi: Yup.string()
    .required("Required")
    .max(150, "Must be at most 150 characters"),
  treatment: Yup.string()
    .required("Required")
    .max(150, "Must be at most 150 characters"),
  generalInstructions: Yup.string()
    .required("Required")
    .max(150, "Must be at most 150 characters"),
  followUp: Yup.string()
    .required("Required")
    .max(150, "Must be at most 150 characters"),
});

const initialValues = {
  name: "",
  age: "",
  gender: "",
  cheifComplaint: false,
  cheifComplaintText: "",
  pdi: "",
  treatment: "",
  generalInstructions: "",
  followUp: false,
  followUpText: "",
};

export default function Hello() {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 50000);
    return () => clearInterval(interval);
  }, [])

  const printRef = useRef();

  const handlePrint = () => {};
  return (
    <Box sx={{ background: "#f2f5f9", py: "30px" }}>
      <Container maxWidth="lg">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            errors,
            values,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
          }) => (
            <>
              {" "}
              {console.log(values)}
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Paper
                      elevation={3}
                      style={{ padding: "20px", my: "30px" }}
                    >
                      <Typography variant="h4" sx={{ fontWeight: 700,py:"4px",textAlign:"center"}}>Patient Registration Form</Typography>
                      <Box>
                        <TextField
                          fullWidth
                          name="name"
                          size="small"
                          id="name"
                          placeholder="Name"
                          label="Name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          error={Boolean(touched.name && errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </Box>
                      <Box sx={{ mt: "20px" }}>
                        <TextField
                          fullWidth
                          name="age"
                          size="small"
                          id="age"
                          type="text"
                          placeholder="Age"
                          label="Age"
                          value={values.age}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={Boolean(touched.age && errors.age)}
                          helperText={touched.age && errors.age}
                        />
                      </Box>
                      <Box sx={{ mt: "20px" }}>
                        <Autocomplete
                          size="small"
                          name="gender"
                          id="gender"
                          options={[
                            { label: "Male", value: "male" },
                            { label: "Female", value: "female" },
                            { label: "Others", value: "others" },
                          ]}
                          onBlur={handleBlur}
                          onChange={(_, value) => {
                            setFieldValue(
                              "gender",
                              value?.value ? value.value : ""
                            );
                          }}
                          error={Boolean(touched.gender && errors.gender)}
                          helperText={touched.gender && errors.gender}
                          getOptionLabel={(option) => option.label}
                          renderInput={(params) => (
                            <TextField {...params} placeholder="Gender" />
                          )}
                        />
                      </Box>
                      <Box sx={{ mt: "20px" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography variant="h6">Chief Complaint:</Typography>
                          <Box>
                            <Checkbox
                              id="cheifComplaint"
                              name="cheifComplaint"
                              onChange={handleChange}
                              checked={values.cheifComplaint}
                            />
                          </Box>
                        </Box>
                        {values.cheifComplaint && (
                          <TextField
                            autoFocus
                            fullWidth
                            multiline
                            type="textarea"
                            rows={6}
                            id="cheifComplaintText"
                            name="cheifComplaintText"
                            value={values.cheifComplaintText}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        )}
                      </Box>
                      <Box sx={{ mt: "20px" }}>
                        <Typography variant="h6">
                          Provisional Diagnosis Investigations:
                        </Typography>
                        <TextField
                          fullWidth
                          multiline
                          type="textarea"
                          rows={6}
                          id="pdi"
                          value={values.pdi}
                          name="pdi"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box>
                      <Box sx={{ mt: "20px" }}>
                        <Typography variant="h6">Treatment:</Typography>
                        <TextField
                          fullWidth
                          multiline
                          type="textarea"
                          rows={6}
                          id="treatment"
                          name="treatment"
                          value={values.treatment}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box>
                      <Box sx={{ mt: "20px" }}>
                        <Typography variant="h6">
                          General Instructions:
                        </Typography>
                        <TextField
                          fullWidth
                          multiline
                          type="textarea"
                          rows={6}
                          id="generalInstructions"
                          name="generalInstructions"
                          value={values.generalInstructions}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Box>
                      <Box sx={{ mt: "20px" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography variant="h6">Follow Up:</Typography>
                          <Box>
                            <Checkbox
                              id="followUp"
                              name="followUp"
                              checked={values.followUp}
                              onChange={handleChange}
                            />
                          </Box>
                        </Box>
                        {values.followUp && (
                          <TextField
                            autoFocus
                            fullWidth
                            multiline
                            type="textarea"
                            rows={6}
                            id="followUpText"
                            name="followUpText"
                            value={values.followUpText}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        )}
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper>
                      <Box sx={{ p: "20px" }}>
                        <ReactToPrint
                          trigger={() => (
                            <Button
                              sx={{
                                background: "#1976d2",
                                "&:hover": {
                                  background: "#1976d2",
                                },
                                color: "#fff",
                              }}
                              onClick={handlePrint}
                              variant="secondary"
                            >
                              Print/Download
                            </Button>
                          )}
                          content={() => printRef.current}
                        />
                      </Box>
                      <Box sx={{ p: "20px" }} ref={printRef}>
                        <Box sx={{ mb: "10px", textAlign: "center" }}>
                          <Typography variant="h4" sx={{ fontWeight: 700 }}>
                          Dr.Gayathri Devi Lenka
                          </Typography>
                          <Typography sx={{ fontSize: "16px" }}>
                            MBBS, MD - General Medicine
                          </Typography>
                          <Typography sx={{ fontSize: "16px" }}>
                            Mig 529, Sbi Colony, Pm Palem Visakhapatnam -530041
                          </Typography>
                          <Typography sx={{ fontSize: "16px" }}>
                            Phone:+91 89778 98989 | Email:
                            hello@doctor.com
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: "end" }}>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: "14px"
                            }}
                          >
                            Date and Time:
                          </Typography>
                          <Typography>
                            {currentDate.toLocaleString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </Typography>
                        </Box>
                       <Divider />
                        <Box sx={{ mt: "20px" }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              fontSize: "14px",
                              mt: "10px",
                            }}
                          >
                            Name:
                            <Typography
                              variant="span"
                              sx={{
                                fontWeight: "normal",
                                fontSize: "14px",
                                pl: "5px",
                              }}
                            >
                              {values.name}
                            </Typography>
                          </Typography>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              fontSize: "14px",
                              mt: "10px",
                            }}
                          >
                            Age:
                            <Typography
                              variant="span"
                              sx={{
                                fontWeight: "normal",
                                fontSize: "14px",
                                pl: "5px",
                              }}
                            >
                              {values.age}
                            </Typography>
                          </Typography>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              fontSize: "14px",
                              mt: "10px",
                            }}
                          >
                            Gender:
                            <Typography
                              variant="span"
                              sx={{
                                fontWeight: "normal",
                                fontSize: "14px",
                                pl: "5px",
                              }}
                            >
                              {values.gender.charAt(0).toUpperCase() +
                                values.gender.slice(1)}
                            </Typography>
                          </Typography>
                        </Box>
                       <Divider />
                        <Box sx={{ mt: "20px" }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              fontSize: "14px",
                              mt: "10px",
                            }}
                          >
                            Chief Complaint:
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "normal",
                              fontSize: "14px",
                              pl: "5px",
                              wordBreak: "break-word",
                            }}
                          >
                            {values.cheifComplaintText
                              .split("\n")
                              .map((line,index,array) => (
                                <React.Fragment key={generateUniqueKey()}>
                                  {line}
                                   {index !== array.length - 1 && <br />} 
                                </React.Fragment>
                              ))}
                          </Typography>
                        </Box>
                       <Divider />
                        <Box sx={{ mt: "20px" }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              fontSize: "14px",
                              mt: "10px",
                            }}
                          >
                            Provisional Diagnosis Investigations:
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "normal",
                              fontSize: "14px",
                              pl: "5px",
                              wordBreak: "break-word",
                            }}
                          >
                            {values.pdi.split("\n")
                              .map((line,index,array) => (
                                <React.Fragment key={generateUniqueKey()}>
                                  {line}
                                   {index !== array.length - 1 && <br />} 
                                </React.Fragment>
                              ))}
                          </Typography>
                        </Box>
                       <Divider />
                        <Box sx={{ mt: "20px" }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              fontSize: "14px",
                              mt: "10px",
                            }}
                          >
                            Treatment:
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "normal",
                              fontSize: "14px",
                              pl: "5px",
                              wordBreak: "break-word",
                            }}
                          >
                            {values.treatment.split("\n")
                              .map((line,index,array) => (
                                <React.Fragment key={generateUniqueKey()}>
                                  {line}
                                  {index !== array.length - 1 && <br />} 
                                </React.Fragment>
                              ))}
                          </Typography>
                        </Box>
                       <Divider />
                        <Box sx={{ mt: "20px" }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              fontSize: "14px",
                              mt: "10px",
                            }}
                          >
                            General Instructions:
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "normal",
                              fontSize: "14px",
                              pl: "5px",
                              wordBreak: "break-word",
                            }}
                          >
                            {values.generalInstructions.split("\n")
                              .map((line,index,array) => (
                                <React.Fragment key={generateUniqueKey()}>
                                  {line}
                                   {index !== array.length - 1 && <br />} 
                                </React.Fragment>
                              ))}
                          </Typography>
                        </Box>
                       <Divider />
                        <Box sx={{ mt: "20px" }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              fontSize: "14px",
                              mt: "10px",
                            }}
                          >
                            Follow Up:
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "normal",
                              fontSize: "14px",
                              pl: "5px",
                              wordBreak: "break-word",
                            }}
                          >
                            {values.followUpText.split("\n")
                              .map((line,index,array) => (
                                <React.Fragment key={generateUniqueKey()}>
                                  {line}
                                   {index !== array.length - 1 && <br />} 
                                </React.Fragment>
                              ))}
                          </Typography>
                        </Box>
                       <Divider />
                        <Box sx={{ textAlign: "end", mt: "50px" }}>
                          <Typography sx={{ fontSize: "18px" }}>
                            Dr.Gayathri Devi Lenka
                          </Typography>
                          <Typography sx={{ fontSize: "16px" }}>
                            Signature
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Form>
            </>
          )}
        </Formik>
      </Container>
    </Box>
  );
}
