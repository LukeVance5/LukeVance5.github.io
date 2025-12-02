import "@/components/css/Experience.css"
function Experience() {

  return <>
  <div id="ExperienceInternal">
   <h1> Experience</h1>
   <div className="job">
    <div className="jobTitle">
    <h2> Research Assistant</h2>
    <h4> Technische Physik Universität Würzburg   </h4>
    <h4>May - Aug 2024 </h4>
    </div>
    <div className="jobBody">
    <p> In this position, I designed optimization scripts for nanophotonic structures using the groundbreaking inverse design method. 
    These scripts were written in python, using machine learning tools such as pytorch and adam to create objective functions. The gradients were calculated
    by using Tidy3d's FDTD API.    </p>
    </div>
   </div>

   <div className="job">
    <div className="jobTitle">
    <h2> Research Assistant</h2>
    <h4> UBC MRI Centre May </h4>
    <h4> May - Aug 2023</h4>
    </div>
    <div className="jobBody">
    <p> In this position, I wrote a package in Julia for a symmetric operator splitting Bloch equation solver. I collaborate with researchers on ways to improve the simulation interface, such as allowing for both 2D and 3D signal acquisition. I also
      added this package to a well known MRI image acquisition software, where we could visualize how robust pulses deal with inhomogeneities.  </p>
    </div>
   </div>
   <div className="job">
    <div className="jobTitle">
    <h2> Worksheet Designer</h2>
    <h4> Hypatia Systems </h4>
    <h4> May - Aug 2022</h4>
    </div>
    <div className="jobBody">
    <p> At Hypatia Systems, I created virtual assignments using Hypatia Create, a digital assignment creator based on LaTeX. During this co-op, I worked directly with production team, such as attending daily standup's, 
      and testing new features and gave feedback and suggestions on improving the software.  </p>
    </div>
   </div>
   </div>
  </>
}



export default Experience