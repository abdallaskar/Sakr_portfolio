

export function createProject(project) {
  const modalId = `modal-${project.name.replace(/\s+/g, '')}`;
  const carouselId = `carousel-${project.name.replace(/\s+/g, '')}`;

  return `
    <div class="col-md-6 col-lg-4 mb-4 button-card">
      <div class="card shadow-sm card-hover h-100" style="max-height: 65vh; overflow: hidden;">
        <!-- Image Carousel in Card -->
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="Images/${project.img_url}" class="d-block w-100 img-fluid" alt="${project.name} Image 1" style="object-fit: cover; height: 43vh;">
            </div>
            <div class="carousel-item">
              <img src="Images/${project.img2_url}" class="d-block w-100 img-fluid" alt="${project.name} Image 2" style="object-fit: cover; height: 43vh;">
            </div>
            <div class="carousel-item">
              <img src="Images/${project.img3_url}" class="d-block w-100 img-fluid" alt="${project.name} Image 3" style="object-fit: cover; height: 43vh;">
            </div>
            <div class="carousel-item">
              <img src="Images/${project.img4_url}" class="d-block w-100 img-fluid" alt="${project.name} Image 4" style="object-fit: cover; height: 43vh;">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        <!-- Card Body -->
        <div class="card-body p-2 d-flex flex-column justify-content-between">
          <div>
            <h3 class="card-title mb-1 text-truncate">${project.name}</h3>
            <p class="card-text small text-muted" style="max-height: 4rem; overflow: hidden;">${project.description}</p>
          </div>
          <div class="d-flex justify-content-center gap-2 mt-2">
            <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#${modalId}">View Details</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Details Modal -->
    <div class="modal fade  button-card" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}-label" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title" id="${modalId}-label">${project.name} Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <!-- Modal Body -->
          <div class="modal-body">
            <div class="row g-3 align-items-center">
              <!-- Project Image -->
              <div class="col-md-6">
                <img src="Images/${project.img_url}" alt="${project.name}" class="img-fluid rounded shadow-sm" style="height: 400px; object-fit: cover;">
              </div>

              <!-- Project Details -->
              <div class="col-md-6 d-flex flex-column justify-content-center">
                
                <p>${project.longDescription}</p>
                <div class="d-flex gap-2 mt-3 text-align-center">
                  <a href="${project.git_url}" target="_blank" class="btn btn-primary">&nbsp;&nbsp;GitHub &nbsp;&nbsp;</a>
                  <a href="${project.live_url}" target="_blank" class="btn btn-primary">Live Demo</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
