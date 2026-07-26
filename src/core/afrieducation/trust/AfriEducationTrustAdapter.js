const AfriEducationTrustAdapter = {

  buildSignals(learner){

    return {
      learnerId: learner.learnerId,
      completedCourses: learner.completedCourses || 0,
      certifications: learner.certifications || [],
      assessmentScores: learner.assessmentScores || 0,
      instructorRatings: learner.instructorRatings || 0,
      verifiedSkills: learner.verifiedSkills || [],
      learningConsistency: learner.learningConsistency || 0
    };

  }

};

export default AfriEducationTrustAdapter;
